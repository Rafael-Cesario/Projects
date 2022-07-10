import { Arg, Mutation, Resolver } from 'type-graphql';
import { DBauth } from '../controlers/auth';
import { AuthModel } from '../models/auth';

@Resolver(AuthModel)
export class AuthResolver {
  
  @Mutation(() => AuthModel)
  async login(@Arg('name') name: string, @Arg('password') password: string) {
    return await DBauth(name, password);
  }
}
