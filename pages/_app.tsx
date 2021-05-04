import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { AnolisProvider } from "anolis-ui"
import { xstyledTheme } from "theme/xstyled";
import { theme } from "theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title key="title">CZECH-CZECH</title>
      </Head>

      <AnolisProvider theme={theme} xstyledTheme={xstyledTheme}>
        <Component {...pageProps} />
      </AnolisProvider>
    </>
  );
};

export default App;
