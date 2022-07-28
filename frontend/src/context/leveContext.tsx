import { createContext, ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
}

interface IInitialValue {
  player: { name: string; skill: string };
  setPlayer(newState: { name: string; skill: string }): void;
  experiencPoints: { level: number; have: number; need: number };
  setExperiencPoints(newState: { level: number; have: number; need: number }): void;
  activeDays: string[];
  setActiveDays(newState: string[]): void;
}

const initialValue = {
  player: { name: 'Nome', skill: 'Habilidade' },
  setPlayer: () => {},
  experiencPoints: { level: 1, have: 0, need: 300 },
  setExperiencPoints: () => {},
  activeDays: [],
  setActiveDays: () => {},
};

export const LevelContext = createContext<IInitialValue>(initialValue);

export const LevelContextProvider = ({ children }: Props) => {
  const [player, setPlayer] = useState(initialValue.player);
  const [experiencPoints, setExperiencPoints] = useState(initialValue.experiencPoints);
  const [activeDays, setActiveDays] = useState(initialValue.activeDays);

  return (
    <LevelContext.Provider
      value={{ experiencPoints, setExperiencPoints, activeDays, setActiveDays, player, setPlayer }}
    >
      {children}
    </LevelContext.Provider>
  );
};
