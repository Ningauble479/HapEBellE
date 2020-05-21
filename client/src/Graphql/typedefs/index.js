import gql from "graphql-tag";

export default gql`

type User {
  _id: ID!
  userName: String!
  email: String!
}

extend type Query {
  isLoggedIn: Boolean!
  bigChungus: Boolean!
  user: User
}

extend type AuthPayload {
  user: User
}

extend type Mutation {
  setUser(_id: String!, email: String!, password: String!): AuthPayload
}
`;