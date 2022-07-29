/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode } from 'react';
import { useDatabase } from '../hooks/useDatabase';

interface Props {
  children: ReactNode;
}

export interface IPlayerData {
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

type TPlayer = { name: string; skill: string; _id: string };
type TExperiencPoints = { level: number; have: number; need: number };

export interface IInitialValue {
  player: TPlayer;
  setPlayer(newState: TPlayer): void;

  experiencPoints: TExperiencPoints;
  setExperiencPoints(newState: TExperiencPoints): void;

  activeDays: string[];
  setActiveDays(newState: string[]): void;
}

const initialValue: IInitialValue = {
	player: { name: '', skill: '', _id: undefined },
	setPlayer: () => {},

	experiencPoints: { level: 1, have: 0, need: 300 },
	setExperiencPoints: () => {},

	activeDays: [],
	setActiveDays: () => {},
};

export const LevelContext = createContext<IInitialValue>(initialValue);

export const LevelContextProvider = ({ children }: Props) => {
	const { player, setPlayer, experiencPoints, setExperiencPoints, activeDays, setActiveDays } = useDatabase(initialValue);

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
