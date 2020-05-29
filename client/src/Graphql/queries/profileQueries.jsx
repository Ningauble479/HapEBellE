import gql from 'graphql-tag'

export const SHOW_USER = gql`
  query myUser{
      myid @client
      myemail @client
      myusername @client
  }
`

export const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $email: String!, $username: String!) {
    updateUser(id: $id, email: $email, username: $username) @client
  }
`;

export const CHECK_USER = gql`
  query currentUser {
    currentUser {
    _id
    userName
    email
    }
  }
`

export const SET_USER = gql`
mutation SetUser($email: String!, $userName: String!){
  setUser @client(email: $email, userName: $userName){
    _id
    userName
    email
  }
}`

export const LOGIN = gql`
mutation Login($email: String!, $password: String!){
  login(email: $email, password: $password){
    user {
      _id
      userName
      email
    }
  }
}
`;

export const LOGGED_IN = gql`
    query loggedIn {
        isLoggedIn @client
    }

`

export const LOGOUT = gql`
    mutation logout {
        logout
        setLoggedIn @client
    }
`