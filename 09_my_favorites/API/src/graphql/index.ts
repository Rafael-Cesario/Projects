import path from "path";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import { ApolloServer } from "apollo-server";

const resolversArray = loadFilesSync(path.join(__dirname, "./resolvers", "**"));
const typeDefsArray = loadFilesSync(path.join(__dirname, "./typedefs", "**"));

const typeDefs = mergeTypeDefs(typeDefsArray);
const resolvers = mergeResolvers(resolversArray);

const server = new ApolloServer({
	typeDefs,
	resolvers,
	formatError: (error) => {
		const newError = new Error(error.message);

		return newError;
	},
});

server.listen().then(({ url }) => console.log(url));
