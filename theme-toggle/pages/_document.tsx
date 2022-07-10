import { Head, Html, Main, NextScript } from "next/document";

const Document = () => (
	<Html lang="pt-br">
		<Head>
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Theme Toggle</title>

			<link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
		</Head>
		<body>
			<Main />
			<NextScript />
		</body>
	</Html>
);
export default Document;
