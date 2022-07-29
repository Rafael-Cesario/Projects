import produce from 'immer';
import { SyntheticEvent, useContext } from 'react';
import { LevelContext } from '../context/leveContext';
import { TitleStyle } from '../styles/titleStyle';
import { useAlertTimer } from '../utils/hooks/sendAlertTimer';
import { Alert } from './alert';

export const Title = () => {
  const { player, setPlayer } = useContext(LevelContext);
  const { alert, startAlertTimer } = useAlertTimer();

  const changePlayerInfo = (e: SyntheticEvent) => {
    const input = e.target as HTMLInputElement;
    const key = input.className;
    const value = input.value;

    const updatedPlayer = produce(player, (draft) => {
      draft[key] = value;
    });

    setPlayer(updatedPlayer);
    startAlertTimer();
  };

  return (
    <TitleStyle className="title">
      <input
        onChange={(e) => changePlayerInfo(e)}
        type={'text'}
        placeholder={'Nome'}
        className="name"
        value={player.name}
      />
      <input
        onChange={(e) => changePlayerInfo(e)}
        type={'text'}
        placeholder={'Habilidade'}
        className="skill"
        value={player.skill}
      />

      {alert && <Alert>Nome e Habilidade Salvo no banco de dados</Alert>}
    </TitleStyle>
  );
};
