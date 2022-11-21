import { Router } from 'express';
import { Auth } from '../controllers/auth';

export const router = Router();

router.post('/login', async (request, response) => Auth.login(request, response));
