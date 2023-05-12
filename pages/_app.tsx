import Head from "next/head";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { AuthContextProvider } from "context/AuthContext";
import { SnackbarProvider } from "notistack";
import OrderMadeSnackbar from "@/components/OrderMadeSnackbar";
import { JSXElementConstructor, ReactElement } from "react";
import ReactPDF from "@react-pdf/renderer";

declare module "notistack" {
  interface VariantOverrides {
    orderMade: {
      pdf: ReactElement<
        ReactPDF.DocumentProps,
        string | JSXElementConstructor<any>
      >;
    };
  }
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>GBM UNDIP</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/gbm-logo-64.ico"></link>
        <link
          rel="shortcut icon"
          href="/icons/gbm-logo-64.ico"
          type="image/x-icon"
        />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <AuthContextProvider>
        <SnackbarProvider
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
          preventDuplicate
          autoHideDuration={3000}
          Components={{
            orderMade: OrderMadeSnackbar,
          }}
        >
          <Component {...pageProps} />
        </SnackbarProvider>
      </AuthContextProvider>
    </>
  );
}
