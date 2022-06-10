import path from "path";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import { ApolloServer } from "apollo-server";

const resolversArray = loadFilesSync(path.join(__dirname, "./resolvers"));
const typeDefsArray = loadFilesSync(path.join(__dirname, "./typedefs"));

const typeDefs = mergeTypeDefs(typeDefsArray);
const resolvers = mergeResolvers(resolversArray);

const server = new ApolloServer({
	typeDefs,
	resolvers,
	formatError: (error) => {
		if (error.message.startsWith("Id")) return new Error(error.message);
		if (error.message.startsWith("Favorite")) return new Error(error.message);
		if (error.message.startsWith("Cannot")) return new Error(error.message);
		if (error.message.startsWith("Cast to ObjectId")) return new Error("Please pass a id to delete a favorite");
		if (error.message.startsWith("Field")) return new Error(error.message);

		return error;
	},
});

server.listen().then(({ url }) => console.log(url));
