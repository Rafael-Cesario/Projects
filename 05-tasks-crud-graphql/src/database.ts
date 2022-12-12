import 'dotenv/config';
import mongoose from 'mongoose';

let uri = process.env.DATABASE!;
const testEnvironment = process.env.NODE_ENV === 'test';
if (testEnvironment) uri += 'test';

export const startDatabase = async () => {
	await mongoose.connect(uri);
	console.log('Database is conneted');
};
