import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export const Client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: process.env.DATABASE!,
});

export const helloQuery = async () => {
	const response = await Client.query({
		query: gql`
			query Hello {
				hello
			}
		`,
	});

	console.log({ response });
};
