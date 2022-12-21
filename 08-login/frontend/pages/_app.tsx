import '../styles/global.css';
import type { AppProps } from 'next/app';
import { Client } from '../services/server';
import { ApolloProvider } from '@apollo/client';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={Client}>
			<Component {...pageProps} />;
		</ApolloProvider>
	);
}
