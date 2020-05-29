import gql from 'graphql-tag'


export const GET_PRODUCTS = gql`
query getProduct($topBox: Int, $id: String) {
    getProduct(topBox: $topBox, id: $id) {
      id
      object
      active
      attributes
      caption
      created
      description
      metadata {
        size
        topBox
        images
      }
      images
      name
    }
  }
`

export const ADD_TO_CART = gql`
mutation addToCart($id: String!, $guestID: String) {
  addToCart(id: $id, guestID: $guestID) {
    _id
    guest
  }
}

`

export const GET_CART = gql`
query getCart($guestId: String) {
  getCart(guestId: $guestId) {
    id
    object
    active
    attributes
    caption
    created
    description
    metadata {
      size
      topBox
      images
    }
    images
    name
    amount
  }
}
`

export const CHECKOUT = gql`
mutation checkout($guestID: String) {
  checkout(guestID: $guestID)
}
`

export const GET_SESSION = gql`
query getCheckoutSession($id: String!) {
  getCheckoutSession(id: $id)
}
`

export const EMPTY_CART = gql`
mutation emptyCart($guestID: String) {
  emptyCart(guestID: $guestID)
}
`