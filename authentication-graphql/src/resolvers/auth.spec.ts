import 'reflect-metadata';

import { ApolloServer } from 'apollo-server';
import { connection } from 'mongoose';
import { MongoDBServer, server } from '../server';
import { createUser, doLogin } from '../utils/querys';

describe('Login a user', () => {
  const userPlaceholder = { name: 'login teste', password: 'loginteste123' };
  let client: ApolloServer;

  beforeAll(async () => {
    client = await server();
    await client.listen();

    MongoDBServer();
  });

  afterAll(async () => {
    await client.stop();
    await connection.dropDatabase();
    await connection.close();
  });

  it('should return a error because the user doesnt exist', async () => {
    const { errors } = await doLogin(userPlaceholder, client);
    expect(errors).toBeDefined();
    expect(errors[0].message).toBe('Name/Password is wrong');
  });

  it('will return a token and a user', async () => {
    const { data: createUserData } = await createUser(userPlaceholder, client);
    expect(createUserData).toHaveProperty('createUser');

    const { data: loginData } = await doLogin(userPlaceholder, client);
    expect(loginData).toHaveProperty('login');

    const { token, user } = loginData.login;
    expect(token).toBeDefined();
    expect(user).toHaveProperty('_id', user._id);
    expect(user).toHaveProperty('name', user.name);
    expect(user).toHaveProperty('password', user.password);
  });
});
