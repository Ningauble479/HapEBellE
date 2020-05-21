import React from "react";  
import { useQuery } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";  
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";  
const cache = new InMemoryCache();  
const link = new HttpLink({
  uri: `http://localhost:1337/graphql`
});
const strapiClient = new ApolloClient({  
  cache,
  link
});

const Query = ({ children, query, id, name, meat, times, client }) => {  
  console.log(times)
  const { data, loading, error } = useQuery(query, {
    variables: { v: Math.random(), id: id, name: name, meat: meat, times: times },
    client: strapiClient
  });
  console.log(data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;  