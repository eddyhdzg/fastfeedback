import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '@/lib/auth';
import theme from '@/styles/theme';
import { Global, css } from '@emotion/react';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
