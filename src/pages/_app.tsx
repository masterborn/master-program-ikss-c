import { FunctionComponent, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import Meta from '@root/components/Meta';
import { AppProps } from 'next/app';
import GlobalStyles from '@styles/GlobalStyles';
import theme from '@styles/theme';
import Layout from '@root/components/Layout/Layout';

const App: FunctionComponent<AppProps> = (props) => {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  const { Component, pageProps } = props;

  return (
    <>
      <Meta />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClientRef.current}>
          <Hydrate state={pageProps.dehydratedState}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Hydrate>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};

export default App;
