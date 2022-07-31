import 'dotenv/config';

import express, { json } from 'express';
import { database } from './database';

import { router as userRoutes } from './routes/user';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(json());
app.use('/user', userRoutes);

app.listen(PORT, () => {
	console.log('\n');
	console.log({ server: `http://localhost:${PORT}`, mode: process.env.NODE_ENV });
	database();
});
