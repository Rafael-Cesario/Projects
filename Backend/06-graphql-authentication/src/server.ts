import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { schema } from './schemas/schema';
import { verifyToken } from './utils/generateToken';

const server = new ApolloServer({
	schema,
	includeStacktraceInErrorResponses: false,
	formatError: formattedError => ({ message: formattedError.message }),
});

const startServer = async () => {
	const { url } = await startStandaloneServer(server, {
		listen: { port: 4000 },

		context: async ({ req }) => {
			const header = req.headers.authorization || 'Bearer ';
			const [_, token] = header.split(' ');
			const decoded = verifyToken(token);

			return decoded.email ? { user: decoded.email } : { user: false };
		},
	});

	console.log('Server connected', url);
};

export { startServer };
