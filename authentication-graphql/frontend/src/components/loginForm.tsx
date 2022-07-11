import { useRef, useState } from 'react';
import { LoginFormStyle } from '../styles/loginForm';

interface LoginFormProps {
  formState: {
    showLoginForm: boolean;
    setShowLoginForm(newState: boolean): void;
  };
}

export const LoginForm = ({ formState }: LoginFormProps) => {
  const { setShowLoginForm } = formState;

  const inputName = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);

  const [fieldsValues, setFieldsValues] = useState({
    name: '',
    password: '',
  });

  // const sendErrorMessage = (inputName:string) => {
  //   const input = 
  // }

  const verifyFields = () => {
    const validateFields = Object.entries(fieldsValues).map((field) => {
      const [key, value] = field;
      if (value) return;

      // in progress
      // sendErrorMessage(key);
      return false;
    });

    const missingValue = validateFields.includes(false);
    return !missingValue;
  };

  const doLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const fieldsOK = verifyFields();
    if (!fieldsOK) return;

    setShowLoginForm(false);
    console.log('formFields', fieldsValues);
  };

  return (
    <LoginFormStyle>
      <div className="container">
        <div className="header">
          <h1>Login</h1>
          <button className="close-button" onClick={() => setShowLoginForm(false)}>
            X
          </button>
        </div>

        <form onSubmit={(e) => doLogin(e)}>
          <div className="fields">
            <div className="field">
              <span>Nome</span>
              <input
                ref={inputName}
                type="text"
                onChange={(e) => setFieldsValues({ name: e.target.value, password: fieldsValues.password })}
              />
            </div>
            <div className="field">
              <span>Senha</span>
              <input
                name="login-password-value"
                type="text"
                onChange={(e) => setFieldsValues({ name: fieldsValues.name, password: e.target.value })}
              />
            </div>
          </div>

          <button className="login-button">Entrar</button>
        </form>
      </div>
    </LoginFormStyle>
  );
};
