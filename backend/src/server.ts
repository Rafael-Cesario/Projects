import express, { json } from 'express';
import 'dotenv/config';

import { router as userRoutes } from './routes/user';
import { mongoDBConnect } from './database';

export const app = express();
const PORT = process.env.PORT;

app.use(json());
app.use('/', userRoutes);

app.listen(PORT, () => {
	console.log({ port: `http://localhost:${PORT}` });
	mongoDBConnect();
});
