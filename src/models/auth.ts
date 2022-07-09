/* eslint-disable indent */
import { Field, ObjectType } from 'type-graphql';
import { UserModel } from './users';

interface IAuth {
  token: string;
  user: UserModel;
}

@ObjectType()
export class AuthModel implements IAuth {
  @Field({ nullable: false })
  token: string;

  @Field(() => UserModel, { nullable: false })
  user: UserModel;
}
