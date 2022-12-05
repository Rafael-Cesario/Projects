import { app } from './server';
import { uri } from './database';
import 'dotenv/config';
import mongoose from 'mongoose';

try {
	app.listen(process.env.PORT, () => console.log(`\nServer is running:\x1b[32m http://localhost:${process.env.PORT} \x1b[0m`));
	mongoose.connect(uri, () => console.log('Database is connected'));
} catch (error: any) {
	console.log({ error: error.message });
}
