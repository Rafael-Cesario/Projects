import 'reflect-metadata';

import { ApolloServer } from 'apollo-server';
import { connection } from 'mongoose';
import { MongoDBServer, server } from '../server';
import { createUser, queryUsers } from '../utils/querys';

describe('User methods', () => {
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

  it('create a new user and returns it', async () => {
    const userPlaceholder = { name: 'teste', password: 'Teste123' };
    const newUser = await createUser(userPlaceholder, client);

    expect(newUser?.data?.createUser.name).toEqual(userPlaceholder.name);
    expect(newUser?.data?.createUser.password).not.toEqual(userPlaceholder.password);
  });

  it('send a error message if name/password is undefined', async () => {
    const user = { name: '', password: '' };
    const newUser = await createUser(user, client);

    let message;

    if (newUser.errors) {
      message = newUser.errors[0].message;
    }

    expect(message).toEqual(
      'User validation failed: name: Missing name Value, password: Missing password Value'
    );
  });

  it('denies access to an unauthenticated user', async () => {
    const { errors } = await queryUsers(client);
    expect(errors).toBeDefined();
    expect(errors[0].message).toEqual(
      'Access denied! You need to be authorized to perform this action!'
    );
  });
});
