import { createContext, ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
}

interface IInitialValue {
  experiencPoints: { level: number; have: number; need: number };
  setExperiencPoints(newState: { level: number; have: number; need: number }): void;
  activeDays: string[];
  setActiveDays(newState: string[]): void;
}

const initialValue = {
  experiencPoints: { level: 1, have: 0, need: 300 },
  setExperiencPoints: () => {},
  activeDays: [],
  setActiveDays: () => {},
};

export const LevelContext = createContext<IInitialValue>(initialValue);

export const LevelContextProvider = ({ children }: Props) => {
  const [experiencPoints, setExperiencPoints] = useState({ level: 1, have: 0, need: 300 });
  const [activeDays, setActiveDays] = useState([]);

  return (
    <LevelContext.Provider value={{ experiencPoints, setExperiencPoints, activeDays, setActiveDays }}>
      {children}
    </LevelContext.Provider>
  );
};
