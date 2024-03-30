import { Fragment, useState } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

import "./globals.css"
import {ThemeProvider} from "next-themes"
import Home from "./Components/Home";
import Group from "./Components/Group";

function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Fragment>
      <Head>
        <title>Internship</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      
      {/* <ThemeProvider> */}
      <Home/>
      <Group  />
    </Fragment>
  );
}

export default MyApp;
