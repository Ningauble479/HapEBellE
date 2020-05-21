import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from "apollo-boost";


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
          myusername: newUsername
      } 
    });
    return null; //best practices
  }
}


const cache = new InMemoryCache();  
const client = new ApolloClient({  
  uri: `http://localhost:3333/graphql`,
  cache,
  resolvers: {
    Mutation: mutations
 },
  credentials: 'include'
});

const initialState = {
    myid: null,
    myemail: null,
    myusername: null
 }
 cache.writeData({  data: initialState });




ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client}>
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
