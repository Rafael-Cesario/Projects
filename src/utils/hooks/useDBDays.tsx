import { useEffect, useState } from 'react';

type DBDays = [string[], (newState: string[]) => void];

export const useDBDays = (year: number): DBDays => {
  const [activeDays, setActiveDays] = useState([]);

  const fetchProgressDays = async () => {
    const response = await fetch(`./api/${year}`);
    const data = (await response.json()) as { progressDays: { days: string[] }[] };
    setActiveDays(data.progressDays[0]?.days || []);
  };

  useEffect(() => {
    fetchProgressDays();
  }, [year]);

  return [activeDays, setActiveDays];
};

export const attDaysOnDB = async (year: string, activeDays: string[]) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'aplication/json' },
    body: JSON.stringify({ year, days: activeDays }),
  };

  const response = await fetch(`./api/${year}`, options);
  const data = await response.json();
  console.log(data);
};
