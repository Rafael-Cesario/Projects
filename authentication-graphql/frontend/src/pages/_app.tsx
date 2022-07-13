import Head from 'next/head';
import { Header } from '../components/header';
import { Main } from '../components/main';
import GlobalStyle, { AppStyle } from '../styles/global';
import { client } from '../utils/apolloClient';
import { ApolloProvider } from '@apollo/client';
import { UserContextProvider } from '../context/userContext';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppStyle>
        
        <Head>
          <title>Authentication</title>
        </Head>

        <UserContextProvider>
          <Header />
          <Main />
        </UserContextProvider>

        <GlobalStyle />
      </AppStyle>
    </ApolloProvider>
  );
};

export default App;
