import { SyntheticEvent, useContext, useEffect, useState } from 'react';
import { LevelContext } from '../context/leveContext';
import { MonthStyle } from '../styles/monthStyle';
import produce from 'immer';

export const Month = () => {
  const { experiencPoints, setExperiencPoints, activeDays, setActiveDays } = useContext(LevelContext);
  const [year, setYear] = useState(new Date().getFullYear());

  const totalDaysInYear = [];

  let month = 1;
  while (month <= 12) {
    const monthDaysTotal = new Date(year, month, 0).getDate();

    let countDay = 0;
    while (countDay < monthDaysTotal) {
      const day = new Date(year, month - 1, countDay + 1).getDate();
      totalDaysInYear.push(`${day}/${month}/${year}`);
      countDay++;
    }

    month++;
  }

  const levelUp = (e: SyntheticEvent) => {
    const button = e.target as HTMLButtonElement;
    const day = button.getAttribute('data-name');

    const hasDay = activeDays.indexOf(day);

    setActiveDays(
      produce(activeDays, (draft) => {
        hasDay > -1 ? draft.splice(hasDay, 1) : draft.push(day);
      })
    );

    setExperiencPoints(
      produce(experiencPoints, (draft) => {
        if (hasDay > -1) {
          draft.have = draft.have - 100;

          if (draft.have < 0) {
            draft.level--;
            draft.need = Math.ceil(draft.need - (draft.need * 10) / 100);
            draft.have = draft.need - 100;
          }

          return;
        }

        const newPoints = draft.have + 100 > draft.need ? draft.need : draft.have + 100;
        draft.have = newPoints;
      })
    );
  };

  useEffect(() => {
    const allButtons = document?.querySelectorAll(`.day`) as NodeListOf<HTMLButtonElement>;

    allButtons.forEach((button) => {
      const attribute = button.getAttribute('data-name');
      const hasButton = activeDays.includes(attribute);

      hasButton ? button.classList.add('active') : button.classList.remove('active');
    });
  }, [activeDays, year]);

  return (
    <MonthStyle>
      <div className="year">
        <button className="back" data-name={'Voltar 1 ano'} onClick={() => setYear(year - 1)}>
          {'<'}
        </button>
        <h1 className="title">{year}</h1>
        <button className="next" data-name={'Avançar 1 ano'} onClick={() => setYear(year + 1)}>
          {'>'}
        </button>
      </div>

      <div className="days">
        {totalDaysInYear.map((day) => {
          return <button onClick={(e) => levelUp(e)} key={day + year} className="day" data-name={day}></button>;
        })}
      </div>
    </MonthStyle>
  );
};
