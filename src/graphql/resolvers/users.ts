/* eslint-disable indent */
import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import { User } from '../../database/models/users';
import { UserModel } from '../models/users';
import crypto from 'crypto';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  password: string;
}

@Resolver()
export class UserResolver {
  @Query(() => [UserModel])
  async users() {
    const users = await User.find({});
    return users;
  }

  @Mutation(() => UserModel)
  async createUser(@Arg('user') user: CreateUserInput) {
    const newUser = new User({ _id: crypto.randomUUID(), ...user });
    await newUser.save();
    return newUser;
  }
}
