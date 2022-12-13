import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { schema } from './schemas/schema';

export const server = new ApolloServer({
	schema,
	includeStacktraceInErrorResponses: false,
	formatError: formattedError => ({ message: 'Error: ' + formattedError.message }),
});

export const startServer = async () => {
	const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
	console.log({ url });
};
