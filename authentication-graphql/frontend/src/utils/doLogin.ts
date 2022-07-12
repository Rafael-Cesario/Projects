import { FieldsValues, InputsRef, verifyFields } from './verifyFields';

export const doLogin = (fieldsValues: FieldsValues, inputsRef: InputsRef) => {
  const fieldsOK = verifyFields(fieldsValues, inputsRef);
  if (!fieldsOK) return false;
  return true;
};
