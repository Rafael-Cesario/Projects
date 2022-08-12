import { connect } from 'mongoose';
import 'dotenv/config';

const URI = `${process.env.URI}-${process.env.NODE_ENV}`;

export const mongoDBConnect = () => {
	connect(URI, () => {
		console.log({ db: 'connected', mode: process.env.NODE_ENV });
	});
};
