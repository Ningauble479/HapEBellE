export default function(price){
    let stringPrice = price.toString()
    stringPrice = stringPrice.slice(0, -2)
    return stringPrice
}