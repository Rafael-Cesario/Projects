import { FieldsValues, verifyFields, InputsRef } from './verifyFields';

export const createAccount = (fieldsValue: FieldsValues, inputsRefs: InputsRef) => {
  const fieldsOK = verifyFields(fieldsValue, inputsRefs);
  if (!fieldsOK) return false;
  return true;
};
