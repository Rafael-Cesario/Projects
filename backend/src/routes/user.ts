import { Router } from 'express';
import { User } from '../controllers/user';

export const router = Router();

router.post('/', (request, response) => {
	return User.create(request, response);
});
