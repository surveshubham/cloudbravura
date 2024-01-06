import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-us-east-1.hygraph.com/v2/clauxcay42c0w01umgmgf5ygd/master",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

export default client;