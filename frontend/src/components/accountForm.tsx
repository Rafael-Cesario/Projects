/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useContext, useRef, useState } from 'react';
import { AccountFormStyle } from '../styles/accountFormStyle';
import produce from 'immer';
import { IFormAccount } from './header';
import { verifyFields } from '../utils/verifyFields';
import { UserContext } from '../context/userContext';
import { sendErrorMessage } from '../utils/sendErrorMessage';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/Ai';
import { strongPassword } from '../utils/strongPassword';

interface IAccountFormProps {
  propValues: {
    formAccount: IFormAccount;
    setFormAccount(newState: IFormAccount): void;
    setUserAuthStatus(newState: boolean): void;
  };
}

export const AccountForm = ({ propValues }: IAccountFormProps) => {
  const { formAccount, setFormAccount } = propValues;
  const [fieldsValues, setFieldsValues] = useState({ name: '', password: '' });
  const { createUser, doLogin } = useContext(UserContext);

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

  const newAccount = async () => {
    try {
      strongPassword(fieldsValues.password, inputsRefs.password);
      await createUser({ variables: { user: fieldsValues } });
    } catch (error) {
      const nameCapitalize =
        fieldsValues.name.substring(0, 1).toUpperCase() + fieldsValues.name.substring(1);
      const errorMessage = `${nameCapitalize}: este usuario já existe`;
      sendErrorMessage('name', inputsRefs.name, errorMessage);
      throw new Error(errorMessage);
    }
  };

  const login = async () => {
    try {
      await doLogin({ variables: { name: fieldsValues.name, password: fieldsValues.password } });
    } catch (error) {
      sendErrorMessage('name', inputsRefs.name, 'Nome Incorreto');
      sendErrorMessage('password', inputsRefs.password, 'Senha Incorreta');
      throw new Error('Name or password is wrong');
    }
  };

  const resolveForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      verifyFields(fieldsValues, inputsRefs);

      if (formAccount.title === 'Nova Conta') await newAccount();

      await login();

      closeForm();
    } catch (error) {
      return;
    }
  };

  const [inputType, setInputType] = useState('password');

  const changePassWordIcon = () => {
    const input = inputsRefs.password.current;
    const newType = input.type === 'password' ? 'text' : 'password';
    setInputType(newType);
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
                type={inputType}
                name={'password'}
                onChange={(e) => changeFormValues(e.target.name, e.target.value)}
              />
              <span className="icon" onClick={() => changePassWordIcon()}>
                {inputType === 'text' ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </div>
          </div>

          <button className="login-button">
            {formAccount.title === 'Nova Conta' ? 'Criar Conta' : 'Entrar'}
          </button>
        </form>
      </div>
    </AccountFormStyle>
  );
};
