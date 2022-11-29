import { AppProps } from 'next/app';
import { enableMapSet } from 'immer';
import { GlobalStyle } from '../styles/appStyle';

enableMapSet();

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}
