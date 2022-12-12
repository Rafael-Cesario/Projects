import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

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

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const startServer = async () => {
	const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
	console.log({ url });
};

startServer();
