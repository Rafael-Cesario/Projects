import express from 'express';
import 'dotenv/config';
import { startDataBase } from './database';
import { changeData, getData } from './controlers/user';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.post('/', async (req, res) => {
	const data = await getData(req.body);
	res.status(200).json({ data: data });
});

app.post('/user', async (req, res) => {
	const user = await changeData(req.body);
	res.status(200).json({ user });
});

// app.delete

app.listen(4000, () => {
	startDataBase();
	console.log({ server: `http://localhost:4000`, mode: process.env.NODE_ENV });
});
