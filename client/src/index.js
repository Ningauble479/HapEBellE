import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from "apollo-boost";  
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";  
import typeDefs from './Graphql/typedefs'
import resolvers from './Graphql/resolvers'


const cache = new InMemoryCache();  
const client = new ApolloClient({  
  uri: `http://localhost:3333/graphql`,
  cache,
  typeDefs,
  resolvers,
  credentials: 'include'
});
cache.writeData({
  data: {
    myId: '88888'
  }
});





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
