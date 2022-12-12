import { makeExecutableSchema } from '@graphql-tools/schema';
import { helloResolvers } from './resolvers/helloResolver';
import { tasksResolver } from './resolvers/tasksResolver';
import { helloType } from './types/helloTypes';
import { tasksType } from './types/tasksType';
import { userType } from './types/userType';
import { userResolver } from './resolvers/userResolver';

export const schema = makeExecutableSchema({
	typeDefs: [helloType, tasksType, userType],
	resolvers: [helloResolvers, tasksResolver, userResolver],
});
