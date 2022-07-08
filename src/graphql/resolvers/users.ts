/* eslint-disable indent */
import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import { UserModel } from '../models/users';
import { DBcreateUser, DBusers } from '../../database/controlers/users';

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
    return await DBusers();
  }

  @Mutation(() => UserModel)
  async createUser(@Arg('user') user: CreateUserInput) {
    return await DBcreateUser(user);
  }
}
  