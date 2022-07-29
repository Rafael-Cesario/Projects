/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useEffect } from 'react';
import axios from 'axios';
import produce from 'immer';
import { usePlayerDB } from '../utils/hooks/usePlayerDB';
import { useExperiencPointsDB } from '../utils/hooks/useExperiencPointsDB';
import { useActiveDaysDB } from '../utils/hooks/useActiveDaysDB';

interface IUser {
  data: {
    _id: string;
    name: string;
    skill: string;
    level: number;
    have: number;
    need: number;
    activeDays: string[];
  };
}

interface Props {
  children: ReactNode;
}

export type TPlayer = { name: string; skill: string; _id: string };
export type TExperiencPoints = { level: number; have: number; need: number };

interface IInitialValue {
  player: TPlayer;
  setPlayer(newState: TPlayer): void;

  experiencPoints: TExperiencPoints;
  setExperiencPoints(newState: TExperiencPoints): void;

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
  const { player, setPlayer } = usePlayerDB(initialValue.player);
  const { experiencPoints, setExperiencPoints } = useExperiencPointsDB(initialValue.experiencPoints, player._id);
  const { activeDays, setActiveDays } = useActiveDaysDB(initialValue.activeDays, player._id);

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
        draft.have = playerData.data.have || initialValue.experiencPoints.have;
        draft.need = playerData.data.need || initialValue.experiencPoints.need;
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
