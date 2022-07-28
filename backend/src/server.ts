import express from 'express';
import 'dotenv/config';
import { startDataBase } from './database';
import { getData } from './controlers/user';

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
	const data = await getData();
	res.status(200).json({ data });
});

// app.post
// app.delete

app.listen(4000, () => {
	startDataBase();
	console.log({ server: `http://localhost:4000`, mode: process.env.NODE_ENV });
});
