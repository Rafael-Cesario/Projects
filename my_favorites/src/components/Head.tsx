import React from "react";

import Head from "next/head";

const Header = ({ title }: { title: string }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="shortcut icon" href="favorite.png" type="image/x-icon" />
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap" rel="stylesheet"></link>
		</Head>
	);
};

export { Header };
