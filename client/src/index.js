import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from "apollo-boost";
import GQLCHECK from './Graphql/checks'


// import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';




//All the mutations goes here
const mutations = {
  updateUser: (_, variables, { cache }) => {
    //query existing data
    //Calculate new counter value
    const newID = variables.id;
    const newEmail = variables.email;
    const newUsername = variables.username
    cache.writeData({ 
      data: { 
          myid: newID,
          myemail: newEmail,
          myusername: newUsername,
          isLoggedIn: true
      }
    });
    console.log(variables)
    return null; //best practices
  }
}

const query = {
  myUser: (_, variables, {cache}) => {
    console.log('itrann')
  }
}


const cache = new InMemoryCache();  
const client = new ApolloClient({  
  uri: `/graphql`,
  cache,
  resolvers: {
    Mutation: mutations,
    Query: query
 },
  credentials: 'include'
});

const initialState = {
    myid: null,
    myemail: null,
    myusername: null,
    isLoggedIn: false
 }
 cache.writeData({  data: initialState });




ReactDOM.render(
  <React.StrictMode>
    
    <Router>
      <ApolloProvider client={client}>
        <GQLCHECK/>
        <App />
      </ApolloProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
