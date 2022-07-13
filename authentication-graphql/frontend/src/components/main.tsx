import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { MainStyle } from '../styles/main';

export const Main = () => {
  const { userAuthStatus: hasToken } = useContext(UserContext);

  return (
    <MainStyle className="title">
      {hasToken ? <h1>Segredo super Secreto</h1> : <h1>Faça login para descobrir um segredo</h1>}
    </MainStyle>
  );
};
