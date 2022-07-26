import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { MainStyle } from '../styles/main';

export const Main = () => {
  const { userAuthStatus } = useContext(UserContext);

  return (
    <MainStyle className="title">
      {!userAuthStatus && <h1>Faça login para descobrir um segredo</h1>}
      {userAuthStatus && <h1>Segredo super Secreto</h1>}
    </MainStyle>
  );
};
