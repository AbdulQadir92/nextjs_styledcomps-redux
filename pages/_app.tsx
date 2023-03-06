import { useState, useLayoutEffect } from "react";
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

  useLayoutEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === null) {
      localStorage.setItem('theme', 'light');
    } else if (theme === 'light') {
      setIsLight(true);
    } else {
      setIsLight(false);
    }
  }, [isLight])

  const toggleTheme = () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      setIsLight(false);
    } else {
      localStorage.setItem('theme', 'light');
      setIsLight(true);
    }
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
