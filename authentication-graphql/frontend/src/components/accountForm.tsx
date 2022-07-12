/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useRef, useState } from 'react';
import { AccountFormStyle } from '../styles/accountFormStyle';
import produce from 'immer';
import { IFormAccount } from './header';

interface IAccountFormProps {
  propValues: {
    formAccount: IFormAccount;
    setFormAccount(newState: IFormAccount): void;
  };
}

export const AccountForm = ({ propValues }: IAccountFormProps) => {
  const { formAccount, setFormAccount } = propValues;
  const [fieldsValues, setFieldsValues] = useState({ name: '', password: '' });

  const inputsRefs = {
    name: useRef<HTMLInputElement>(null),
    password: useRef<HTMLInputElement>(null),
  };

  const closeForm = () => {
    setFormAccount(
      produce(formAccount, (draft) => {
        draft.isVisible = false;
      })
    );
  };

  const changeFormValues = (inputName: string, newValue: string) => {
    const fieldName = inputName as 'name' | 'password';
    const newValues = produce(fieldsValues, (draft) => {
      draft[fieldName] = newValue;
    });

    setFieldsValues(newValues);
  };

  const resolveForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const isDone = formAccount.resolver(fieldsValues, inputsRefs);
    if (isDone) closeForm();
  };

  return (
    <AccountFormStyle>
      <div className="container">
        <div className="header">
          <h1>{formAccount.title}</h1>
          <button className="close-button" onClick={() => closeForm()}>
            X
          </button>
        </div>

        <form onSubmit={(e) => resolveForm(e)}>
          <div className="fields">
            <div className="field">
              <span>Nome</span>
              <input
                ref={inputsRefs.name}
                type="text"
                name={'name'}
                onChange={(e) => changeFormValues(e.target.name, e.target.value)}
              />
            </div>

            <div className="field">
              <span>Senha</span>
              <input
                ref={inputsRefs.password}
                type="text"
                name={'password'}
                onChange={(e) => changeFormValues(e.target.name, e.target.value)}
              />
            </div>
          </div>

          <button className="login-button">{formAccount.title === 'Nova Conta' ? 'Criar Conta' : 'Entrar'}</button>
        </form>
      </div>
    </AccountFormStyle>
  );
};
