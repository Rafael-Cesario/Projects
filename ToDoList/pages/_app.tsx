import { createGlobalStyle } from 'styled-components';
import { AppProps } from 'next/app';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	background-color: #141518;
	color: #dddddd;
	font-family:"Work Sans" ;
	font-weight: bold;

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
