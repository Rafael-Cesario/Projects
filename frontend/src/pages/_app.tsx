import { GlobalStyle } from '../styles/globalStyle';
import { Title } from '../components/title';
import { LeveBar } from '../components/levelBar';

const App = () => {
  return (
    <>
      <Title />
      <LeveBar />

      <GlobalStyle />
    </>
  );
};
export default App;
