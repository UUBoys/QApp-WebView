import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  Observable,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getSession } from "next-auth/react";

import { useApolloStatusStore } from "../common/stores/apollo-store";
import { LoadingType } from "../helpers/loader-helpers";

const httpLink = createHttpLink({
  uri: "/api/",
});

const statusLink = new ApolloLink((operation, forward) => {
  if (!forward) return null;

  const { withConfirmation, shouldTrackStatus } = operation.getContext();
  if (!shouldTrackStatus) return forward(operation);

  useApolloStatusStore.setState({
    isLoading: true,
    isError: false,
    isSuccess: false,
    loadingType: withConfirmation
      ? LoadingType.WITH_CONFIRM
      : LoadingType.WITHOUT_CONFIRM,
  });

  return new Observable((observer) => {
    let handle: any;
    Promise.resolve(operation)
      .then((oper) => forward(oper))
      .then(() => {
        handle = forward(operation).subscribe({
          next: (result) => {
            if (result.errors) {
              useApolloStatusStore.setState({
                isLoading: false,
                isError: true,
                isSuccess: false,
              });
              observer.error(result.errors);
            } else {
              useApolloStatusStore.setState({
                isLoading: false,
                isError: false,
                isSuccess: true,
              });
              observer.next(result);
            }
          },
          error: (error) => {
            useApolloStatusStore.setState({
              isLoading: false,
              isError: true,
              isSuccess: false,
            });
            if (observer.error) observer.error(error);
          },
          complete: observer.complete.bind(observer),
        });
      })
      .catch((error) => {
        useApolloStatusStore.setState({
          isLoading: false,
          isError: true,
          isSuccess: false,
        });
        observer.error(error);
      });

    return () => {
      if (handle) handle.unsubscribe();
    };
  });
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

const combinedLink = authLink.concat(statusLink);

const client = new ApolloClient({
  link: combinedLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
