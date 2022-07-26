import 'reflect-metadata';

import { connection } from 'mongoose';
import { MongoDBServer } from '../server';
import { DBauth } from './auth';
import { DBcreateUser } from './users';

describe('Authentication tests', () => {
  const newUser = { name: 'TesteName', password: 'teste123' };

  beforeAll(async () => {
    MongoDBServer();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('must return the token and the user', async () => {
    await DBcreateUser(newUser);
    const { token, user } = await DBauth(newUser.name, newUser.password);
    expect(token && user).toBeDefined();
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('password');
  });

  it('throw a error if Name or password is missing/wrong', async () => {
    await expect(DBauth(newUser.name, 'wrongPassword')).rejects.toEqual(
      new Error('Name/Password is wrong')
    );
    await expect(DBauth('wrongName', newUser.password)).rejects.toEqual(
      new Error('Name/Password is wrong')
    );
    await expect(DBauth('', '')).rejects.toEqual(new Error('Name/Password is wrong'));
  });
});
