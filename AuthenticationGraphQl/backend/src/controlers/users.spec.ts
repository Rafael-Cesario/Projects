import 'reflect-metadata';

import { MongoDBServer } from '../server';
import { DBcreateUser, DBusers } from '../controlers/users';
import { connection } from 'mongoose';

describe('Testing users methods', () => {
  beforeAll(async () => {
    MongoDBServer();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('return all users on database', async () => {
    await DBcreateUser({ name: 'testeName01', password: 'teste123' });
    const users = await DBusers();
    expect(users.length).toBeGreaterThan(0);
  });

  it('create a new user', async () => {
    const user = { name: 'testename02', password: 'TestePassword' };
    const newUser = await DBcreateUser(user);

    expect(newUser._id).toBeDefined();
    expect(newUser.password).not.toBe(user.password);
    expect(newUser.name).toEqual(user.name.toLowerCase().trim());

    await expect(DBcreateUser(user)).rejects.toEqual(new Error(`${user.name} already exist`));

    await expect(DBcreateUser({ name: '', password: '' })).rejects.toEqual(
      new Error(
        'User validation failed: name: Missing name Value, password: Missing password Value'
      )
    );

    await expect(DBcreateUser({ name: 'Teste', password: 'Teste' })).rejects.toEqual(
      new Error('User validation failed: password: Password is too short')
    );
  });
});
