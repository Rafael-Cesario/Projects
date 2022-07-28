import axios from 'axios';
import { useEffect, useState } from 'react';

type TPlayer = { name: string; skill: string, id: string };

export const usePlayerDB = (initialValue: TPlayer) => {
  const [player, setPlayer] = useState(initialValue);

  const updateDatabase = async () => {
    await axios.post('http://localhost:4000', {
      id: player.id,
      changes: {
        name: player.name,
        skill: player.skill,
      },
    });
  };

  useEffect(() => {
    if (player.name === 'Nome') return;
    if (player.skill === 'Habilidade ') return;

    const updateAfterDelay = setTimeout(() => {
      updateDatabase();
    }, 2000);

    return () => clearTimeout(updateAfterDelay);
  }, [player]);

  return [player, setPlayer] as [TPlayer, (newState: TPlayer) => void];
};
