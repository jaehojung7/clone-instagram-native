import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);

const client = new ApolloClient({
  // uri: "http://localhost:4000/graphql",
  uri: "https://sour-badger-81.loca.lt/graphql",
  cache: new InMemoryCache(),
});
export default client;
