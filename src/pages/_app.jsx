import { useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import DataContext from '@root/contextProviders/dataContext';
import Meta from '@root/components/Meta';
import GlobalStyles from '@styles/GlobalStyles';
import theme from '@styles/theme';
import Layout from '@root/components/Layout/Layout';
import '@fortawesome/fontawesome-svg-core/styles.css';
import ModalProvider from '@root/contextProviders/modalContext';

const App = (props) => {
  const queryClientRef = useRef();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  const { Component, pageProps } = props;
  const name = { Component };
  return (
    <>
      <ModalProvider>
        <Meta />
        <DataContext.Provider value={pageProps}>
          <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClientRef.current}>
              <Hydrate state={pageProps.dehydratedState}>
                <Layout props={pageProps} pageName={name}>
                  <Component {...pageProps} />
                </Layout>
              </Hydrate>
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
            <GlobalStyles />
          </ThemeProvider>
        </DataContext.Provider>
      </ModalProvider>
    </>
  );
};

export default App;
