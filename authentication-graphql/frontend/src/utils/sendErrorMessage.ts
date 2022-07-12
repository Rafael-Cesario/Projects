import { RefObject } from 'react';

export const sendErrorMessage = (inputName: string, inputRef: RefObject<HTMLInputElement>) => {
  const key = inputName as 'name' | 'password';
  const fieldName = key === 'name' ? 'Nome' : 'Senha';
  const input = inputRef.current;
  const inputLabel = input.previousSibling as HTMLSpanElement;
  const labelValue = inputLabel.textContent;

  input.classList.add('error');
  inputLabel.textContent = `${fieldName} não foi preenchido`;

  setTimeout(() => {
    input.classList.remove('error');
    inputLabel.textContent = labelValue;
  }, 5000);
};
