import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getSession } from "next-auth/react";

const httpLink = createHttpLink({
  uri: "/api/",
});

const authLink = setContext(async (_, { headers }) => {
  // Attempt to fetch the session from NextAuth client-side
  const session = await getSession();

  const token = session?.accessToken;
  return {
    headers: {
      ...headers,
      ...(token && { authorization: token ?? "" }),
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
