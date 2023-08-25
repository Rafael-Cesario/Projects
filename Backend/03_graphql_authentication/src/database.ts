import 'dotenv/config';
import mongoose from 'mongoose';

let uri = process.env.DATABASE!;
if (process.env.NODE_ENV === 'test') uri += '-test';

export const startDatabase = async () => {
	mongoose.set('strictQuery', true);
	await mongoose.connect(uri);
	console.log('DB connected');
};
