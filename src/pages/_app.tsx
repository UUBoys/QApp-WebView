/* eslint-disable import/order */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "sonner";
import "react-toastify/dist/ReactToastify.css";

import "@/modules/common/styles/globals.css";
import NavBar from "@/modules/common/components/NavBar";
import { SessionProvider } from "next-auth/react";

import { I18nextProvider } from "react-i18next";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import i18n from "../i18n";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

const client = new ApolloClient({
  uri: process.env.API_URL ?? "",
  cache: new InMemoryCache(),
});

const MyApp = ({
  Component,
  pageProps,
}: AppProps & { preferredLanguage: string }) => {
  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <QueryClientProvider client={queryClient}>
          <I18nextProvider i18n={i18n}>
            <Toaster
              expand
              visibleToasts={6}
              position="bottom-left"
              richColors
            />
            <NavBar />
            <Component {...pageProps} />
          </I18nextProvider>
        </QueryClientProvider>
      </ApolloProvider>
    </SessionProvider>
  );
};

export default MyApp;
