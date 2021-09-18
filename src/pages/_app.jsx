import { useRef, useState } from 'react';
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
import ModalContext from '@root/contextProviders/modalContext';

const App = (props) => {
  const [showModal, setShowModal] = useState(false);
  const queryClientRef = useRef();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  const { Component, pageProps } = props;
  const name = { Component };
  const onCloseModal = () => {
    setShowModal(false);
  };
  const onOpenModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <Meta />
      <DataContext.Provider value={pageProps}>
        <ModalContext.Provider value={{ showModal, onCloseModal, onOpenModal }}>
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
        </ModalContext.Provider>
      </DataContext.Provider>
    </>
  );
};

export default App;
