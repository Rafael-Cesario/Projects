import 'dotenv/config';
import { mongoDBConnect } from './database';
import express, { json } from 'express';
import { router as userRoutes } from './routes/user';
import { router as authRoutes } from './routes/auth';

export const PORT = process.env.PORT;

export const app = express();

app.use(json());

app.use('/', userRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
	console.log({ port: `http://localhost:${PORT}` });
});

mongoDBConnect();
