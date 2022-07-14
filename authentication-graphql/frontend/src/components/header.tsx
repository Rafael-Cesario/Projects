import React, { useContext, useState } from 'react';
import { HeaderStyle } from '../styles/header';
import { AccountForm } from './accountForm';

import { UserContext } from '../context/userContext';

export interface IFormAccount {
  isVisible: boolean;
  title: string;
}

const Header = () => {
  const { userAuthStatus, setUserAuthStatus } = useContext(UserContext);
  const [formAccount, setFormAccount] = useState<IFormAccount>({
    isVisible: false,
    title: '',
  });

  const showForm = (e: React.SyntheticEvent) => {
    const button = e.target as HTMLButtonElement;
    const title = button.textContent === 'Entrar' ? 'Login' : 'Nova Conta';
    const isVisible = !formAccount.isVisible;

    setFormAccount({
      isVisible,
      title,
    });
  };

  const logout = () => {
    fetch('/api/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });
    setUserAuthStatus(false);
  };

  return (
    <HeaderStyle>
      {!userAuthStatus && (
        <button className="header-button" onClick={(e) => showForm(e)}>
          Entrar
        </button>
      )}

      {!userAuthStatus && (
        <button className="header-button" onClick={(e) => showForm(e)}>
          Criar uma conta
        </button>
      )}

      {userAuthStatus && (
        <button className="header-button" onClick={() => logout()}>
          Sair
        </button>
      )}

      {formAccount.isVisible && (
        <AccountForm propValues={{ formAccount, setFormAccount, setUserAuthStatus }} />
      )}
    </HeaderStyle>
  );
};
export { Header };
