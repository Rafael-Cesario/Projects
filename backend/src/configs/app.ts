import express, { json } from 'express';
import { router as userRoutes } from '../routes/user';
import { router as authRoutes } from '../routes/auth';

const app = express();

app.use(json());
app.use('/', userRoutes);
app.use('/auth', authRoutes);

export { app };
