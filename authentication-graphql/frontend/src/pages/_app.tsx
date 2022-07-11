import Head from 'next/head';
import { Header } from '../components/header';
import { Main } from '../components/main';
import GlobalStyle, { AppStyle } from '../styles/global';

const App = () => {
  return (
    <AppStyle>
      <Head>
        <title>Authentication</title>
      </Head>

      <Header />
      <Main />

      <GlobalStyle />
    </AppStyle>
  );
};

export default App;
