import React, { useState } from 'react';
import { HeaderStyle } from '../styles/header';
import { createAccount } from '../utils/createAccount';
import { doLogin } from '../utils/doLogin';
import { FieldsValues, InputsRef } from '../utils/verifyFields';
import { AccountForm } from './accountForm';

export interface IFormAccount {
  isVisible: boolean;
  title: string;
  resolver(fieldsValues: FieldsValues, inputsRef: InputsRef): boolean;
}

const Header = () => {
  const [formAccount, setFormAccount] = useState<IFormAccount>({
    isVisible: false,
    title: '',
    resolver: () => false,
  });

  const showForm = (e: React.SyntheticEvent) => {
    const button = e.target as HTMLButtonElement;
    const title = button.textContent === 'Entrar' ? 'Login' : 'Nova Conta';
    const isVisible = !formAccount.isVisible;
    const resolver = title === 'Login' ? doLogin : createAccount;

    setFormAccount({
      isVisible,
      title,
      resolver,
    });
  };

  return (
    <HeaderStyle>
      <button className="header-button" onClick={(e) => showForm(e)}>
        Entrar
      </button>

      <button className="header-button" onClick={(e) => showForm(e)}>
        Criar uma conta
      </button>

      {formAccount.isVisible && <AccountForm propValues={{ formAccount, setFormAccount }} />}
    </HeaderStyle>
  );
};
export { Header };
