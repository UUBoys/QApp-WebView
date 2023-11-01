import { ApolloProvider } from "@apollo/client";
import moment from "moment";
import "moment/locale/cs";
import "moment/locale/en-gb";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { I18nextProvider } from "react-i18next";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "sonner";

import i18n from "../i18n";

import Layout from "@/modules/common/Layout/Layout";
import "@/modules/common/styles/globals.css";
import client from "@/modules/lib/apolloClient";

moment.locale(i18n.language === "en" ? "en-gb" : "cs");

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

const MyApp = ({ Component, pageProps }: AppProps) => {
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
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </I18nextProvider>
        </QueryClientProvider>
      </ApolloProvider>
    </SessionProvider>
  );
};

export default MyApp;
