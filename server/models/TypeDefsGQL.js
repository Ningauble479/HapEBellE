const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Subscription {
        userAdded: User
    }
    type User {
        _id: ID!
        userName: String
        email: String
        guest: Boolean
    }

    type Metadatas {
        size: String
        topBox: Int
        midBox: Int
        images: String
    }

    type Product {
        id: ID
        object: String
        active: Boolean
        attributes: [String]
        caption: String
        created: String
        description: String
        metadata: Metadatas
        images: [String]
        name: String,
        amount: Int
    }

    type AuthPayload {
        user: User
    }

    type Finished {
        finished: Boolean
    }

    type Query {
        getUsers: [User]
        currentUser: User
        getProduct (
            active: Boolean,
            topBox: Int,
            id: String): [Product]
        getOneProduct(id: String!): [Product]
        getCart(guestId: String): [Product]
        getCheckoutSession(id: String!): String
    }
    type Mutation {
        updateUser(_id: ID!, userName: String!, email: String!): User
        login(email: String!, password: String!): AuthPayload
        signup(userName: String!, email: String!, password: String!) : User
        logout: Boolean
        addToCart(id: String, amount: Int, price: Int, guestID: String): User
        checkout(guestID: String): String
        emptyCart(guestID: String): Boolean
    }
`;

module.exports = typeDefs