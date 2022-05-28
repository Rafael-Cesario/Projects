import React from "react";

import Head from "next/head";

const Header = ({ title }: { title: string }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link>
			<link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"></link>
			<link rel="shortcut icon" href="to-do-list.png" type="image/x-icon" />
		</Head>
	);
};

export { Header };
