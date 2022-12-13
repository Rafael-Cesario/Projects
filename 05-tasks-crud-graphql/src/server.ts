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
	process.env.NODE_ENV !== 'test' && console.log({ url });
	return { url, server };
};
