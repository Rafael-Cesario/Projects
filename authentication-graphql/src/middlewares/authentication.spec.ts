import jwt from 'jsonwebtoken';

import { ResolverData } from 'type-graphql';
import { authentication } from './authentication';
import { authConfig } from '../config/authentication';

type Context = { token?: string };

describe('Cheking if the user is authenticated', () => {
  it('must return true if a valid token is provider', () => {
    const { secret } = authConfig.jwt;
    const fakeToken = `Bearer ${jwt.sign({}, secret, { expiresIn: 60 })}`;
    const resolverData = { context: { token: fakeToken } } as ResolverData<Context>;
    const authResponse = authentication(resolverData, []);
    expect(authResponse).toBe(true);
  });

  it('returns false because the token is not valid', () => {
    const resolverData = { context: { token: 'Bearer blablabla' } } as ResolverData<Context>;
    const authResponse = authentication(resolverData, []);
    expect(authResponse).toBe(false);
  });

  it('returns false because the secret is not valid', () => {
    const fakeSecret = 'blablabla';
    const fakeToken = `Bearer ${jwt.sign({}, fakeSecret, { expiresIn: 60 })}`;
    const resolverData = { context: { token: fakeToken } } as ResolverData<Context>;
    const authResponse = authentication(resolverData, []);
    expect(authResponse).toBe(false);
  });
});
