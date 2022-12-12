import { makeExecutableSchema } from '@graphql-tools/schema';
import { helloResolvers } from './resolvers/helloResolver';
import { tasksResolver } from './resolvers/tasksResolver';
import { helloType } from './types/helloTypes';
import { tasksType } from './types/tasksType';

export const schema = makeExecutableSchema({
	typeDefs: [helloType, tasksType],
	resolvers: [helloResolvers, tasksResolver],
});
