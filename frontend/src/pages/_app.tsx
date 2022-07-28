import { GlobalStyle } from '../styles/globalStyle';
import { Title } from '../components/title';
import { LeveBar } from '../components/levelBar';
import { Month } from '../components/month';
import { LevelContextProvider } from '../context/leveContext';

const App = () => {
  return (
    <>
      <LevelContextProvider>
        <Title />
        <LeveBar />
        <Month />
        <GlobalStyle />
      </LevelContextProvider>
    </>
  );
};
export default App;
