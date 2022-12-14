import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { makeExecutableSchema } from '@graphql-tools/schema';

const typeHello = `#graphql
    type Query {
        hello: String!
 	}
`;

const resolverHello = {
	Query: {
		hello: () => 'Hello World',
	},
};

const helloSchema = makeExecutableSchema({ typeDefs: [typeHello], resolvers: [resolverHello] });
const server = new ApolloServer({ schema: helloSchema });

const startServer = async () => {
	const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
	console.log({ url });
};

export { startServer };
