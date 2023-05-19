import 'dotenv/config';
import mongoose from 'mongoose';

export const startDatabase = async () => {
	let URI = process.env.DATABASE!;
	if (process.env.NODE_ENV === 'test') URI += '-test';

	mongoose.set('strictQuery', true);
	await mongoose.connect(URI);
	console.log('DB is running');
};
