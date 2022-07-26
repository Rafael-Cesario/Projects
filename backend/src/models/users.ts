/* eslint-disable indent */
import { Field, ID, ObjectType } from 'type-graphql';

export interface IUser {
  _id: string;
  name: string;
  password: string;
}

@ObjectType()
export class UserModel implements IUser {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field()
  password: string;
}
