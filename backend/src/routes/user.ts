import { Router } from 'express';
import { UserController } from '../controllers/user';

export const router = Router();

const User = new UserController();

router.post('/', (request, response) => User.create(request, response));
