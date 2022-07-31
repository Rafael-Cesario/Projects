import 'dotenv/config';

import { connect } from 'mongoose';

const URI = `${process.env.URI}-${process.env.NODE_ENV}`;

export const database = async () => {
	await connect(URI, {}, (error) => {
		if (error) return console.log(error);
		console.log({ database: 'connected', collection: process.env.NODE_ENV });
	});
};
