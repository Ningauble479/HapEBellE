const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Subscription {
        userAdded: User
    }
    type User {
        _id: ID!
        userName: String
        email: String
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
    }

    type AuthPayload {
        user: User
    }
    type Query {
        getUsers: [User]
        currentUser: User
        getProduct (active: Boolean, where: String, topBox: Int): [Product]
        getOneProduct(id: String!): [Product]
    }
    type Mutation {
        updateUser(_id: ID!, userName: String!, email: String!): User
        login(email: String!, password: String!): AuthPayload
        signup(userName: String!, email: String!, password: String!) : User
        logout: Boolean
        
    }
`;

module.exports = typeDefs