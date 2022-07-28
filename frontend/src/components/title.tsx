import produce from 'immer';
import { SyntheticEvent, useContext } from 'react';
import { LevelContext } from '../context/leveContext';
import { TitleStyle } from '../styles/titleStyle';

export const Title = () => {
  const { player, setPlayer } = useContext(LevelContext);

  const changePlayerInfo = (e: SyntheticEvent) => {
    const input = e.target as HTMLInputElement;
    const key = input.className;
    const value = input.value;

    const updatedPlayer = produce(player, (draft) => {
      draft[key] = value;
    });

    setPlayer(updatedPlayer);
  };

  return (
    <TitleStyle className="title">
      <input onChange={(e) => changePlayerInfo(e)} type={'text'} className="name" value={player.name} />
      <input onChange={(e) => changePlayerInfo(e)} type={'text'} className="skill" value={player.skill} />
    </TitleStyle>
  );
};
