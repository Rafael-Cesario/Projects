import 'dotenv/config';
import express from 'express';

import { router as mainRoutes } from './routes/main';

const app = express();
const PORT = process.env.PORT || 4000;

app.use('/', mainRoutes);

app.listen(PORT, () => {
	console.log({ server: `http://localhost:${PORT}`, mode: process.env.NODE_ENV });
});
