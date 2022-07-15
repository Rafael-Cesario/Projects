import { RefObject } from 'react';

export const sendErrorMessage = (
  inputName: string,
  inputRef: RefObject<HTMLInputElement>,
  errorMessage?: string
) => {
  const key = inputName as 'name' | 'password';
  const fieldName = key === 'name' ? 'Nome' : 'Senha';
  const input = inputRef.current;
  const inputLabel = input.previousSibling as HTMLSpanElement;

  input.classList.add('error');
  inputLabel.innerText = errorMessage || `O campo ${fieldName} não foi preenchido`;

  setTimeout(() => {
    input.classList.remove('error');
    inputLabel.textContent = fieldName;
  }, 1000 * 20); // 20 secs
};