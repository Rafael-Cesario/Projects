import { Router } from 'express';
import { User } from '../controllers/user';

export const router = Router();

router.post('/', async (request, response) => {
	try {
		const user = await User.create(request.body);
		return response.status(201).json({ user });
	} catch (error: any) {
		return response.status(400).send(error.message);
	}
});
