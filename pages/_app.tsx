import Head from "next/head";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { AuthContextProvider } from "context/AuthContext";

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
        <link
          href="/icons/gbm-logo-16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/gbm-logo-32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/icons/gbm-logo-32.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </>
  );
}
