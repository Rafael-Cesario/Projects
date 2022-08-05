import express from 'express';
import 'dotenv/config';

import { router as userRoutes } from './routes/user';

const PORT = process.env.PORT;
const app = express();

app.use('/', userRoutes);

app.listen(PORT, () => {
	console.log({ port: `http://localhost:${PORT}` });
});
