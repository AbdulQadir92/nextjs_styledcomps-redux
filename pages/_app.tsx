import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

import GlobalStyles from "../styles/Global";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "../styles/themes/LightTheme";
import { DarkTheme } from "../styles/themes/DarkTheme";

import { Provider } from "react-redux";
import store from "../store/store";

export default function App({ Component, pageProps }: AppProps) {
  const [isLight, setIsLight] = useState(true);

  const toggleTheme = () => {
    setIsLight(!isLight);
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={isLight ? LightTheme : DarkTheme}>
        <GlobalStyles />
        <Layout toggleTheme={toggleTheme}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}
