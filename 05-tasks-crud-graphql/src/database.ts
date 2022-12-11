import 'dotenv/config';
import mongoose from 'mongoose';

let uri = process.env.URL!;
if (process.env.NODE_ENV === 'test') uri += '-test';

export const startDatabase = () => {
	mongoose.connect(uri);
	console.log({ uri });
	console.log('Mongoose is connected');
};
