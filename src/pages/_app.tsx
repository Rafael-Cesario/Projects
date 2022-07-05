import { useState } from 'react';
import { Progress } from '../components/progress/progress';
import { Year } from '../components/year/year';
import { GlobalStyle } from './globalStyle';

const App = () => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);

  return (
    <>
      <title>Progress</title>

      <Year year={year} setYear={setYear} />
      <Progress year={year} setYear={setYear} />

      <GlobalStyle />
    </>
  );
};

export default App;
