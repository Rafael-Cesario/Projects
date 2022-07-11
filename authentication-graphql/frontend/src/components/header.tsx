import { useState } from 'react';
import { HeaderStyle } from '../styles/header';
import { LoginForm } from './loginForm';

const Header = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <HeaderStyle>
      <button className="header-button" onClick={() => setShowLoginForm(!showLoginForm)}>
        Entrar
      </button>
      <button className="header-button">Criar uma conta</button>

      {showLoginForm && <LoginForm formState={{ showLoginForm, setShowLoginForm }} />}
    </HeaderStyle>
  );
};
export { Header };
