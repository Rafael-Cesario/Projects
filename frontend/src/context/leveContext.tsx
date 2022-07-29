/* eslint-disable @typescript-eslint/no-empty-function */
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
  player: { name: string; skill: string; _id: string };
  setPlayer(newState: { name: string; skill: string }): void;
  experiencPoints: { level: number; have: number; need: number };
  setExperiencPoints(newState: { level: number; have: number; need: number }): void;
  activeDays: string[];
  setActiveDays(newState: string[]): void;
}

const initialValue = {
  player: { name: '', skill: '', _id: undefined },
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

  const loadData = async (playerID: string) => {
    const { data: playerData } = await axios.post<IUser>('http://localhost:4000', { id: playerID });
    if (!playerData.data) return;

    setPlayer(
      produce(player, (draft) => {
        draft.name = playerData.data.name || player.name;
        draft.skill = playerData.data.skill || player.skill;
        draft._id = playerData.data._id || player._id;
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
  };

  useEffect(() => {
    const storageID = localStorage.getItem('playerID');
    if (!storageID) return;
    loadData(storageID);
  }, []);

  return (
    <LevelContext.Provider
      value={{
        experiencPoints,
        setExperiencPoints,
        activeDays,
        setActiveDays,
        player,
        setPlayer,
      }}
    >
      {children}
    </LevelContext.Provider>
  );
};
