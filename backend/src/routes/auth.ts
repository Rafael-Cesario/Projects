import { Router } from 'express';
import { Auth } from '../controllers/auth';

export const router = Router();

router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;
		const login = await Auth.login(email, password);

		res.status(200).json({ login });
	} catch (error: any) {
		res.status(400).send(error.message);
	}
});
