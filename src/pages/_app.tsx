import { useState } from 'react';
import { Progress } from '../components/progress/progress';
import { Year } from '../components/year/year';
import { GlobalStyle } from '../styles/globalStyle';

const App = () => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);

  return (
    <>
      <title>Progress</title>

      <Year year={year} setYear={setYear} />
      <Progress year={year} />

      <GlobalStyle />
    </>
  );
};

export default App;
