import { useMutation } from '@apollo/client';
import { LOGIN } from '../querys/user';

export const useLogin = (setUserAuthStatus: (newState: boolean) => void) => {
  const [doLogin] = useMutation(LOGIN, {
    onCompleted(data: { login: { token: string } }) {
      // set cookie
      fetch('/api/login', {
        method: 'post',
        headers: {
          'Content-Type': 'Application/json',
        },
        body: JSON.stringify({ token: data.login.token }),
      });

      setUserAuthStatus(true);
    },
  });

  return doLogin;
};
