/* eslint-disable @typescript-eslint/no-explicit-any */
import { CreateUserInput } from '../../graphql/resolvers/users';

import crypto from 'crypto';
import { User } from '../models/users';
import { UserModel } from '../../graphql/models/users';

export const DBusers = async (): Promise<UserModel[]> => {
  const users = await User.find({});
  return users;
};

export const DBcreateUser = async (
  user: CreateUserInput
): Promise<UserModel> => {
  try {
    const newUser = new User({ _id: crypto.randomUUID(), ...user });
    await newUser.save();
    return newUser;
  } catch (error: any) {
    if (error.code === 11000) throw new Error(`${user.name} already exist`);
    throw new Error(error.message);
  }
};
