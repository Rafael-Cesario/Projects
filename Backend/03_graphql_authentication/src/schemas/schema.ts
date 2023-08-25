import { userType } from './types/userType';
import { userResolver } from './resolvers/userResolver';
import { makeExecutableSchema } from '@graphql-tools/schema';

export const schema = makeExecutableSchema({
	typeDefs: [userType],
	resolvers: [userResolver],
});
