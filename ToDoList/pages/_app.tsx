import { createGlobalStyle } from 'styled-components';
import { AppProps } from 'next/app';
import { enableMapSet } from 'immer';

enableMapSet();

const GlobalStyle = createGlobalStyle`
  * {
	  margin: 0;
	  padding: 0;
	  box-sizing: border-box;
	  font-family:"Work Sans" ;
	  font-weight: bold;
  }

  body {
	background-color: #111;
	color: #ddd;
  }
`;

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}
