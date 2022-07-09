import 'reflect-metadata';

import { ApolloServer, gql } from 'apollo-server';
import { connection } from 'mongoose';
import { MongoDBServer, server } from '../server';
import { UserModel } from '../models/users';
import { CreateUserInput } from './users';

interface QueryCreateUser {
  data: { createUser: UserModel };
  errors?: { message: string }[];
}

const CREATEUSER = gql`
  mutation ($user: CreateUserInput!) {
    createUser(user: $user) {
      _id
      name
      password
    }
  }
`;

describe('User methods', () => {
  let client: ApolloServer;

  const createUser = async (user: CreateUserInput): Promise<QueryCreateUser> => {
    return (await client.executeOperation({
      query: CREATEUSER,
      variables: { user },
    })) as QueryCreateUser;
  };

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
    const user = { name: 'teste', password: 'Teste123' };
    const newUser = await createUser(user);

    expect(newUser?.data?.createUser.name).toEqual(user.name);
    expect(newUser?.data?.createUser.password).not.toEqual(user.password);
  });

  it('send a error message if name/password is undefined', async () => {
    const user = { name: '', password: '' };
    const newUser = await createUser(user);

    let message;

    if (newUser.errors) {
      message = newUser.errors[0].message;
    }

    expect(message).toEqual(
      'User validation failed: name: Missing name Value, password: Missing password Value'
    );
  });

  it.todo('returns all users');
  it.todo('denies access to an unauthenticated user');
});
