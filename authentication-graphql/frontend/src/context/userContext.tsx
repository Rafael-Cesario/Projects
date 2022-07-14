/* eslint-disable @typescript-eslint/no-empty-function */

import { useQuery } from '@apollo/client';
import { createContext, ReactNode, useEffect } from 'react';
import { useCreateuser } from '../utils/hooks/useCreateuser';
import { useLogin } from '../utils/hooks/useLogin';
import { useUserAuthStatus } from '../utils/hooks/userAuthStatus';
import { USERS } from '../utils/querys/user';

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
  const { loading, data, error } = useQuery(USERS);
  const [userAuthStatus, setUserAuthStatus] = useUserAuthStatus(false);

  const createUser = useCreateuser(setUserAuthStatus);
  const doLogin = useLogin(setUserAuthStatus);

  useEffect(() => {
    if (error) console.log({ userAuthStatus, error });
    if (data) console.log({ userAuthStatus, data });
  }, [data, error, loading, userAuthStatus]);

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
