import { ApolloClient, InMemoryCache } from '@apollo/client';

const uri = process.env.NEXT_PUBLIC_DATABASE;

export const Client = new ApolloClient({
	cache: new InMemoryCache(),
	uri,
});
