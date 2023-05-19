import express, { json } from 'express';
import { router as userRoute } from './routes/userRoute';

export const app = express();

app.use(json());

// Routes
app.use('/user', userRoute);
