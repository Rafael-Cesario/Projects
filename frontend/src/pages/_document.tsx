import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () => {
				return originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				});
			};

			const initialProps = await Document.getInitialProps(ctx);

			return { ...initialProps, styles: [initialProps.styles, sheet.getStyleElement()] };
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="shortcut icon" href="favicon-32x32.png" type="image/x-icon" />
				</Head>
				<body>
					<Main></Main>
					<NextScript></NextScript>
				</body>
			</Html>
		);
	}
}
