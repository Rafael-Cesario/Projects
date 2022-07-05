import { useEffect, useState } from 'react';
import { Days } from './days/days';
import { ProgressStyle } from './style';

interface ProgressProps {
  year: number;
  setYear(newyear: number): void;
}

const Progress = ({ year, setYear }: ProgressProps) => {
  const [activeDays, setActiveDays] = useState([]);
  const monthsDays: number[][] = [];
  const totalPreviousDays = new Date(year, 0, 1).getDay();
  const days = [];

  let day = 1;
  while (day < totalPreviousDays) {
    days.push(day);
    day++;
  }
  monthsDays.push(days);

  let month = 0;
  while (month < 12) {
    const monthDays = new Date(year, month + 1, 0).getDate();
    console.log(monthDays);
    const days = [];

    let day = 1;
    while (day <= monthDays) {
      days.push(day);
      day++;
    }

    monthsDays.push(days);
    month++;
  }

  return (
    <ProgressStyle>
      {monthsDays.map((monthTotalDays, month) => {
        const className = month === 0 ? 'previous' : '';
        return monthTotalDays.map((day) => {
          return (
            <Days
              key={`${month},${day}`}
              day={day}
              className={className}
              year={year}
              month={month}
              activeDays={activeDays}
              setActiveDays={setActiveDays}
            />
          );
        });
      })}
    </ProgressStyle>
  );
};

export { Progress };
