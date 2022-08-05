import { Router } from 'express';
import { User } from '../controllers/user';

export const router = Router();

router.post('/', async (request, response) => {
	return await User.create(request, response);
});
