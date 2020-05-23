import gql from 'graphql-tag'


export const GET_PRODUCTS = gql`
query getProduct($topBox: Int) {
    getProduct(topBox: $topBox) {
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
    }
  }

`