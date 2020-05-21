import React from "react";  
import { useQuery } from "@apollo/react-hooks";

const Query = ({ children, query, id, name, meat, times }) => {  
  console.log(times)
  const { data, loading, error } = useQuery(query, {
    variables: { v: Math.random(), id: id, name: name, meat: meat, times: times }
  });
  console.log(data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;  