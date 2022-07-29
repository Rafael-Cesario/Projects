import axios from 'axios';
import { useEffect, useState } from 'react';
import { TPlayer } from '../../context/leveContext';

export const usePlayerDB = (initialValue: TPlayer) => {
  const [player, setPlayer] = useState(initialValue);

  const updateDatabase = async () => {
    const { data } = await axios.post<{ user: TPlayer }>('http://localhost:4000/user', {
      id: player._id,
      changes: {
        name: player.name,
        skill: player.skill,
      },
    });

    if (data.user._id) {
      localStorage.setItem('playerID', data.user._id);
    }
  };

  useEffect(() => {
    if (!player.name && !player.skill) return;

    const updateAfterDelay = setTimeout(() => {
      updateDatabase();
    }, 2000);

    return () => clearTimeout(updateAfterDelay);
  }, [player]);

  return { player, setPlayer };
};