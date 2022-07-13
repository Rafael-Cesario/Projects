/* eslint-disable @typescript-eslint/no-empty-function */
import { useMutation } from '@apollo/client';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createContext, ReactNode, useEffect, useState } from 'react';
import { CREATE_USER, LOGIN } from '../utils/querys/user';
import cookie from 'js-cookie';

type TCreateUser = { variables: { user: { name: string; password: string } } };
export type TDoLogin = { variables: { name: string; password: string } };

interface IDefaultValues {
  createUser: (variables: TCreateUser) => Promise<unknown>;
  doLogin: (variables: TDoLogin) => Promise<unknown>;
  userAuthStatus: boolean;
  setUserAuthStatus(newState: boolean): void;
}

const defaultValues: IDefaultValues = {
  createUser: async () => {},
  doLogin: async () => {},
  userAuthStatus: false,
  setUserAuthStatus: () => {},
};

export const UserContext = createContext(defaultValues);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [userAuthStatus, setUserAuthStatus] = useState(false);
  const [createUser] = useMutation(CREATE_USER);
  const [doLogin] = useMutation(LOGIN, {
    onCompleted(data) {
      const expires = 1; // 1 day
      cookie.set('token', `${data.login.token}`, { expires });
    },
  });

  return (
    <UserContext.Provider
      value={{
        createUser,
        doLogin,
        userAuthStatus,
        setUserAuthStatus,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
