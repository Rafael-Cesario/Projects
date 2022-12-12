import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { tasksType as typeDefs } from './types/tasksType';
import { tasksResolver as resolvers } from './resolvers/tasksResolver';

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

export const startServer = async () => {
	const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
	console.log({ url });
};
