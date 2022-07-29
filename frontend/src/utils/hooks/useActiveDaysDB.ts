import axios from 'axios';
import { useEffect, useState } from 'react';

export const useActiveDaysDB = (initialValue: string[], id: string) => {
  const [activeDays, setActiveDays] = useState(initialValue);

  const saveOnDB = async () => {
    await axios.post('http://localhost:4000/user', {
      id,
      changes: {
        activeDays,
      },
    });
  };

  useEffect(() => {
    saveOnDB();
  }, [activeDays]);

  return { activeDays, setActiveDays };
};
