import axios from 'axios';
import { useEffect, useState } from 'react';
import { TExperiencPoints } from '../../context/leveContext';

export const useExperiencPointsDB = (initialValue: TExperiencPoints, id: string) => {
  const [experiencPoints, setExperiencPoints] = useState(initialValue);

  const saveOnDB = async () => {
    const {data} = await axios.post('http://localhost:4000/user', {
      id,
      changes: {
        level: experiencPoints.level,
        have: experiencPoints.have,
        need: experiencPoints.need,
      },
    });

    console.log(data);
  };

  useEffect(() => {
    if (experiencPoints.level === 1 && experiencPoints.have === 0 && experiencPoints.need === 300) return;
    saveOnDB();
  }, [experiencPoints]);

  return { experiencPoints, setExperiencPoints };
};
