import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../querys/user';

export const useCreateuser = (setUserAuthStatus: (newState: boolean) => void) => {
  const [createUser] = useMutation(CREATE_USER, {
    onCompleted() {
      setUserAuthStatus(true);
    },
  });

  return createUser;
};
