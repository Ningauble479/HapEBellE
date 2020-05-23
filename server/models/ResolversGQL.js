const User = require('./mongooseModels');
const { PubSub } = require('apollo-server');
const bcrypt = require('bcrypt')
const stripe = require('stripe')('sk_test_wmByYTxHfH2aqnvMMGSJG05t00O0YJxd3o');

//bcrypt stuff\
function delay() {
    return new Promise(resolve => setTimeout(resolve, 300));
  }

async function delayedLog(item, topBox) {
    // notice that we can await a function
    // that returns a promise
    await delay();
    if(item.metadata.topBox == topBox){
        console.log('found item')
        return item
    }
    // console.log(item);
  }

async function processArray(array, topBox) {
    let stuff = []
    for (const item of array) {
        let returned = await delayedLog(item, topBox);
        if(returned){
        stuff = [item]}
    }
    console.log(stuff)
    return stuff;
  }
const USER_ADDED = 'USER_ADDED';

const resolvers = {
    Query: {
        getUsers: async (parent, args, context) => {
            if(!context.req.user){
                console.log('wgat')
                return null
            }
            let data = await User.find().exec()
            return data
        },
        currentUser: async (parent, args, context) => {
            let data = context.req.user
            console.log(context.req.user)
            console.log(context.getUser())
            return data
        },
        getProduct: async (parent, args, context) => {
            let active = true
            if (args.active == false){active = false}
            console.log('Running get product')
            let {data} = await stripe.products.list({active: active})
            // console.log(data)
            if(args.where){
                console.log(args.where)
            }
            
            else if (args.topBox){

                let data2 = await processArray(data, args.topBox)
                return data2
                let i = 0
                // console.log(args.topBox)
                // data.forEach(async (e)=>{
                //     // console.log(i)
                //     // console.log(e)
                //     if(data[i].metadata.topBox == args.topBox){
                //         console.log({thisOne: e})
                //     }
                //     i++
                // })
            }
            else {
            return data
            }
        },
        getOneProduct: async (parent, args, context) => {
            console.log(args.id)
            let {data} = await stripe.products.list({ids: ['prod_HKj70qxERHXjGc']})
            console.log(data)
            return data
        }

    },
    Mutation: {
        updateUser: async (_, args) => {
            try {
                let response = await User.findOneAndUpdate(
                    {'_id': args.id},
                    {'userName': args.userName, 'email': args.email},
                    (err, data)=>{
                        if(err) return err
                        return {success: true, Data: data}

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
            return {user}
        },
        logout: async (parent, args, context) => {
            context.logout()

        },
        signup: async (parent, {userName, email, password }, context) => {
          console.log({email: email})
          const userExists = await User.findOne({'email': email}, (err, data)=>{return data});
          console.log(userExists)
          let newUser = new User()
          if (userExists != null) {
            throw new Error('User with email already exists');
          }
    
          newUser.userName = userName
          newUser.email = email
          newUser.password = password
          
          newUser.save((err)=>{
              if(err) return err
          })

          await context.login(newUser);

          return { user: newUser };

        },
    },

};

module.exports = resolvers