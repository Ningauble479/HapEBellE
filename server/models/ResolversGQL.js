const User = require('./mongooseModels');
const { PubSub } = require('apollo-server');
const bcrypt = require('bcrypt')
const stripe = require('stripe')('sk_test_wmByYTxHfH2aqnvMMGSJG05t00O0YJxd3o');
import {addToCartLogic} from './logicFunctions.js'

//bcrypt stuff\
function delay() {
    return new Promise(resolve => setTimeout(resolve, 300));
}

async function delayedLog(item, topBox) {
    // notice that we can await a function
    // that returns a promise
    await delay();
    if (item.metadata.topBox == topBox) {
        return item
    }
}

async function processArray(array, topBox) {
    let stuff = []
    for (const item of array) {
        let returned = await delayedLog(item, topBox);
        if (returned) {
            stuff = [item]
        }
    }
    return stuff;
}


async function getCartLogic(id) {
    let data = await User.findById(id).exec()
    let ids = []
    if (data.cart === null || data.cart === undefined || data.cart.length === 0) {
        return
    }
    else {
        data.cart.forEach((i) => {
            ids.push(i.id)
        })
        if (ids === null) {
            return
        }
        else {
            let items = await stripe.products.list({ ids: ids })
            let iter = 0
            items.data.forEach((i) => {
                i.amount = data.cart[iter].amount
                iter++
            })
            return items.data
        }
    }
}


const resolvers = {
    Query: {
        getUsers: async (parent, args, context) => {
            if (!context.req.user) {
                return null
            }
            let data = await User.find().exec()
            return data
        },
        currentUser: async (parent, args, context) => {
            let data = context.req.user
            return data
        },
        getProduct: async (parent, args, context) => {
            let active = true
            let data = null
            if (args.active == false) { active = false }
            if (args.id) {
                data = await stripe.products.list({ active: active, ids: [args.id] })
            }
            else {
                data = await stripe.products.list({ active: active })
            }
            if (args.topBox) {

                let data2 = await processArray(data.data, args.topBox)
                return data2
            }
            else {
                return data.data
            }
        },
        getOneProduct: async (parent, args, context) => {
            let { data } = await stripe.products.list({ ids: ['prod_HKj70qxERHXjGc'] })
            return data
        },
        getCart: async (parent, args, context) => {
            console.log({getCart: args})
            if (!context.req.user) {
                if (args.guestId) {
                    let data = await getCartLogic(args.guestId)
                    console.log(data)
                    return data
                }
                return
            }
            let data = await getCartLogic(context.req.user._id)
            console.log(data)
            return data

        },
        getCheckoutSession: async (parent, args, context) => {
            let data = await stripe.checkout.sessions.retrieve(args.id)
        }

    },
    Mutation: {
        updateUser: async (_, args) => {
            try {
                let response = await User.findOneAndUpdate(
                    { '_id': args.id },
                    { 'userName': args.userName, 'email': args.email },
                    (err, data) => {
                        if (err) return err
                        return { success: true, Data: data }

                    }
                );
                return response;
            } catch (e) {
                return e.message
            }
        },
        login: async (parent, { email, password }, context) => {
            const { user } = await context.authenticate('graphql-local', { email, password });
            context.login(user);
            return { user }
        },
        logout: async (parent, args, context) => {
            context.logout()

        },
        signup: async (parent, { userName, email, password }, context) => {
            const userExists = await User.findOne({ 'email': email }, (err, data) => { return data });
            let newUser = new User()
            if (userExists != null) {
                throw new Error('User with email already exists');
            }

            newUser.userName = userName
            newUser.email = email
            newUser.password = password

            newUser.save((err) => {
                if (err) return err
            })

            await context.login(newUser);

            return { user: newUser };

        },
        addToCart: async (parent, args, context) => {
            let item = {
                id: args.id,
                amount: args.amount ? args.amount : 1,
                price: args.price
            }
            let found = false

            //If user is not logged in and has not created a guest account yet. Guest account ID is stored in localStorage.
            if (context.req.user === null || context.req.user === undefined) {
                console.log(args)
                if (args.guestID === null || args.guestID === undefined) {

                    let guestUser = new User()
                        guestUser.guest = true
                        guestUser.cart = []

                    let theUser = await guestUser.save()
                        let returnUser = await User.findByIdAndUpdate(
                            theUser._id,
                            {$push: { cart: item }})
                        return returnUser
                }
                else if(args.guestID){
                    addToCartLogic(args.guestID, item, args.id)
                }
            }
            else {
                addToCartLogic(context.req.user._id, item, args.id)
            }
        },
        checkout: async (parent, args, context) => {
            console.log(context.req.user)
            console.log(args)
            let id = context.req.user ? context.req.user._id : args.guestID
            console.log(id)
            let data = await User.findById(id).exec()
            let preCheckout = await prepareCheckoutItems(data.cart)

            const session = await stripe.checkout.sessions.create(
                {
                    billing_address_collection: 'auto',
                    shipping_address_collection: {
                        allowed_countries: ['US'],
                    },
                    success_url: 'http://localhost:3000/success/{CHECKOUT_SESSION_ID}',
                    cancel_url: 'http://localhost:3000/cancel',
                    mode: 'payment',
                    payment_method_types: ['card'],
                    line_items: preCheckout
                })
            return session.id
        },
        emptyCart: async (parent, args, context) => {
            if (!context.req.user && args.guestID) {
                let data = User.findByIdAndUpdate(args.guestID, { $set: { 'cart': [] } }).exec()
                return true
            }
            else {
                let data = User.findByIdAndUpdate(context.req.user._id, { $set: { 'cart': [] } }).exec()
                return true
            }
            return false
        }
    },

};



async function delayedCheckoutPriceFinder(item) {
    // notice that we can await a function
    // that returns a promise
    await delay();
    let pushItem = {
        price: null,
        quantity: item.amount
    }

    let test = await stripe.prices.list({ product: item.id })
    pushItem.price = test.data[0].id
    return pushItem
}

async function prepareCheckoutItems(array) {
    let preCheckout = []
    for (const i of array) {
        let pushItem = await delayedCheckoutPriceFinder(i)
        preCheckout.push(pushItem)
    }
    return preCheckout
}

module.exports = resolvers