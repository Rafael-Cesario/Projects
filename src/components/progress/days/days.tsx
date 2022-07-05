import { useEffect, useRef } from 'react';
import { DaysStyle } from './style';
import produce from 'immer';

interface DaysProps {
  year: number;
  month: number;
  day: number;
  className: string;

  activeDays: string[];
  setActiveDays(newActiveDays: string[]): void;
}

const Days = ({ className, day, year, month, activeDays, setActiveDays }: DaysProps) => {
  const dayDiv = useRef<HTMLDivElement>(null);

  const saveDays = (e: React.SyntheticEvent) => {
    const div = e.target as HTMLDivElement;
    const day = div.getAttribute('id');
    const hasDay = activeDays.indexOf(day);

    setActiveDays(
      produce(activeDays, (draft) => {
        hasDay > -1 ? draft.splice(hasDay, 1) : draft.push(day);
      })
    );
  };

  useEffect(() => {
    const day = dayDiv.current.getAttribute('id');
    const activeDayIncludeDay = activeDays.includes(day);
    activeDayIncludeDay ? dayDiv.current.classList.add('active') : dayDiv.current.classList.remove('active');
  }, [activeDays]);

  return (
    <DaysStyle ref={dayDiv} className={className} onClick={(e) => saveDays(e)} id={`${year}/${month}/${day}`}>
      <span>{`${day}/${month}/${year}`}</span>
    </DaysStyle>
  );
};

export { Days };
