
import './App.css';
import MainPath from "./MainPath"
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function App() {
  const client = new ApolloClient({
    uri: "https://shielded-fjord-16966.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
    <ApolloProvider client={client}>
       <MainPath />
      </ApolloProvider>
    </>
  );
}

export default App;
