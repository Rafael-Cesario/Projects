import { Query, Resolver } from 'type-graphql';
import { UserModel } from '../models/Users';
import crypto from 'crypto';

@Resolver()
export class UserResolver {
  private data: UserModel[] = [
    { id: crypto.randomUUID(), name: 'Rafael', password: '123' },
  ];

  @Query(() => [UserModel])
  users() {
    return this.data;
  }
}
