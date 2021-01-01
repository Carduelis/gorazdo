import CssBaseline from '@material-ui/core/CssBaseline';
import { FirebaseAuthUIProvider } from 'src/contexts/FirebaseAuth';
import { LocaleProvider } from 'src/contexts/Locale';
import { Header } from 'src/components/Header';
import { ThemeProvider } from 'src/contexts/Theme';
import Head from 'next/head';
import React from 'react';

function App(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    // eslint-disable-next-line no-unused-expressions
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Gorazdo {pageProps.title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <CssBaseline />

      <CSRProviders>
        <LocaleProvider>
          <ThemeProvider>
            <Header />
            <Component {...pageProps} />
          </ThemeProvider>
        </LocaleProvider>
      </CSRProviders>
    </React.Fragment>
  );
}

export default App;

const CSRProviders = ({ children }) => {
  if (typeof window === 'object') {
    return <FirebaseAuthUIProvider>{children}</FirebaseAuthUIProvider>;
  }
  return children;
};
