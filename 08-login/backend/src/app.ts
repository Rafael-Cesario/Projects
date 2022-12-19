import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { makeExecutableSchema } from '@graphql-tools/schema';

const typeDefs = `#graphql
	type Query {
		hello: String!
	}
`;

const resolvers = {
	Query: {
		hello: () => 'Hello World',
	},
};

const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

const server = new ApolloServer({ schema });

export const startServer = async () => {
	const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
	console.log({ url });
};
