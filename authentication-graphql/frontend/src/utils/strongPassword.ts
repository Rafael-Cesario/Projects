import { RefObject } from 'react';
import { sendErrorMessage } from './sendErrorMessage';

export const strongPassword = (password: string, passwordInput: RefObject<HTMLInputElement>) => {
  const hasMinLetters = password.length > 11 ? true : false;
  const hasUpperLetter = password.match(/[A-Z]/) ? true : false;
  const hasLowerLetter = password.match(/[a-z]/) ? true : false;
  const hasNumberOrSymbols = password.match(/[0-9,!@#$%¨&*_+]/) ? true : false;

  const isStrong = ![hasMinLetters, hasUpperLetter, hasLowerLetter, hasNumberOrSymbols].includes(false);

  if (!isStrong) {
    sendErrorMessage(
      'password',
      passwordInput,
      `
      Sua senha não é forte o suficiente.
  
      Deve conter no minimo 12 letras.
  
      Ter uma letra maiuscula e uma minuscula.
  
      Ter algum simbolo ou numero.
  
  
      `
    );

    throw new Error('Your password is not strong enough');
  }
};
