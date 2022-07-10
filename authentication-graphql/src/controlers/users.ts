/* eslint-disable @typescript-eslint/no-explicit-any */
import { CreateUserInput } from '../resolvers/users';

import crypto from 'crypto';
import { User } from '../entities/users';
import { UserModel } from '../models/users';

export const DBusers = async (): Promise<UserModel[]> => {
  const users = await User.find({});
  return users;
};

export const DBcreateUser = async (user: CreateUserInput): Promise<UserModel> => {
  try {
    const hasUser = await User.findOne({ name: user.name });
    if (hasUser) throw new Error(`${user.name} already exist`);
    
    const newUser = new User({ _id: crypto.randomUUID(), ...user });
    await newUser.save();
    return newUser;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
