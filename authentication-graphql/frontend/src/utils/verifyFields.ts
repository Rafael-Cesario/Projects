import { RefObject } from 'react';
import { sendErrorMessage } from './sendErrorMessage';

export type InputsRef = {
  name: RefObject<HTMLInputElement>;
  password: RefObject<HTMLInputElement>;
};
export type FieldsValues = { name: string; password: string };

export const verifyFields = (fieldsValues: FieldsValues, inputsRef: InputsRef) => {
  const validateFields = Object.entries(fieldsValues).map((field) => {
    const [fieldName, fieldValue] = field;
    if (fieldValue) return;

    sendErrorMessage(fieldName, inputsRef[fieldName]);
    return false;
  });

  const missingValue = validateFields.includes(false);
  if (missingValue) throw new Error('A value is missing');
};
