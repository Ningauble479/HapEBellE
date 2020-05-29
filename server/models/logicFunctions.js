import User from '../models/mongooseModels'

export async function addToCartLogic(id, item, itemId){
    let data = await User.findById(id).exec()
    let found = false
    data.cart.forEach((i) => {
        if (i.id === item.id) {
            User.findByIdAndUpdate(
                id,
                { $inc: { 'cart.$[elem].amount': item.amount } },
                { arrayFilters: [{ 'elem.id': itemId }] }
            ).exec()
            found = true
            return
        }
    })
    if (found === false) {
        User.findByIdAndUpdate(
            id,
            { $push: { cart: item } },
            (err, data) => {
                if (err) { console.log({ error: err }) }
                else { console.log({ data: data }) }
            }
        )
    }
}