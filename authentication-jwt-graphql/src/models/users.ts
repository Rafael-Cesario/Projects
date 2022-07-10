/* eslint-disable indent */
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class UserModel {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field()
  password: string;
}
