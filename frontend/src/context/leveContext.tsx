import { createContext, ReactNode, useEffect, useState } from 'react';
import axios from 'axios';
import produce from 'immer';
import { usePlayerDB } from '../hooks/usePlayerDB';

interface IUser {
  data: {
    _id: string;
    name: string;
    skill: string;
    level: number;
    xpHave: number;
    xpNeed: number;
    activeDays: string[];
  };
}

interface Props {
  children: ReactNode;
}

interface IInitialValue {
  player: { name: string; skill: string; id: string };
  setPlayer(newState: { name: string; skill: string }): void;
  experiencPoints: { level: number; have: number; need: number };
  setExperiencPoints(newState: { level: number; have: number; need: number }): void;
  activeDays: string[];
  setActiveDays(newState: string[]): void;
}

const initialValue = {
  player: { name: 'Nome', skill: 'Habilidade', id: '0' },
  setPlayer: () => {},
  experiencPoints: { level: 1, have: 0, need: 300 },
  setExperiencPoints: () => {},
  activeDays: [],
  setActiveDays: () => {},
};

export const LevelContext = createContext<IInitialValue>(initialValue);

export const LevelContextProvider = ({ children }: Props) => {
  const [player, setPlayer] = usePlayerDB(initialValue.player);
  const [experiencPoints, setExperiencPoints] = useState(initialValue.experiencPoints);
  const [activeDays, setActiveDays] = useState(initialValue.activeDays);

  const loadData = async () => {
    const { data: playerData } = await axios.get<IUser>('http://localhost:4000');

    setPlayer(
      produce(player, (draft) => {
        draft.name = playerData.data.name || player.name;
        draft.skill = playerData.data.skill || player.skill;
        draft.id = playerData.data._id || player.id;
      })
    );

    setExperiencPoints(
      produce(experiencPoints, (draft) => {
        draft.have = playerData.data.xpHave || initialValue.experiencPoints.have;
        draft.need = playerData.data.xpNeed || initialValue.experiencPoints.need;
        draft.level = playerData.data.level || initialValue.experiencPoints.level;
      })
    );

    setActiveDays(playerData.data.activeDays || initialValue.activeDays);

    console.log(player.id);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <LevelContext.Provider
      value={{ experiencPoints, setExperiencPoints, activeDays, setActiveDays, player, setPlayer }}
    >
      {children}
    </LevelContext.Provider>
  );
};
