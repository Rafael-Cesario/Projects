import { AuthChecker } from 'type-graphql';
import { verify } from 'jsonwebtoken';
import { authConfig } from '../config/authentication';

type Context = { token?: string };

const authentication: AuthChecker<Context> = ({ context }): boolean => {
  const authHeader = context.token;
  if (!authHeader) return false;

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);
    return !!decoded;
  } catch {
    return false;
  }
};

export { authentication };
