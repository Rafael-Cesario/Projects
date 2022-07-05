import { YearStyle } from './style';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/Md';

interface YearProps {
  year: number;
  setYear(newyear: number): void;
}

const Year = ({ year, setYear }: YearProps) => {
  return (
    <YearStyle>
      <button onClick={() => setYear(year - 1)}>
        <span className="tooltip">Voltar 1 Ano</span>
        <MdKeyboardArrowLeft className="icon" />
      </button>

      <h1>{year}</h1>

      <button onClick={() => setYear(year + 1)}>
        <span className="tooltip">Avançar 1 Ano.</span>
        <MdKeyboardArrowRight className="icon" />
      </button>
    </YearStyle>
  );
};

export { Year };
