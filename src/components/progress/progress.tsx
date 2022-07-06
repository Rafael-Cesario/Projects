import { useDBDays } from '../../utils/hooks/useDBDays';
import { Days } from './days/days';
import { ProgressStyle } from './style';

interface ProgressProps {
  year: number;
}

const Progress = ({ year }: ProgressProps) => {
  const [activeDays, setActiveDays] = useDBDays(year);
  const monthsDays: number[][] = [];
  const totalPreviousDays = new Date(year, 0, 1).getDay();

  const previousDays = [];
  let day = 1;
  while (day <= totalPreviousDays) {
    previousDays.push(day);
    day++;
  }
  monthsDays.push(previousDays);

  let month = 0;
  while (month < 12) {
    const monthDays = new Date(year, month + 1, 0).getDate();
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
              className={className}
              day={day}
              month={month}
              year={year}
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
