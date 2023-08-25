import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { userResolver } from './resolvers/userResolver';
import { userTypeDef } from './types/userType';

const schema = makeExecutableSchema({
	typeDefs: [userTypeDef],
	resolvers: [userResolver],
});

const server = new ApolloServer({
	schema,
	formatError: formatedError => ({ message: formatedError.message }),
});

export const startServer = async () => {
	const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
	console.log({ url });
};
