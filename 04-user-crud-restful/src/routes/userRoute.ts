import express, { Request, Response } from 'express';
import { IUser } from '../interface/userInterface';
import { UserModel } from '../schema/userSchema';

export const router = express.Router();

// Creates a new User
router.post('/', async (req: Request, res: Response) => {
	const { email, password, name, age } = req.body as IUser;

	if (!email) res.status(400).json({ error: 'Email is required' });

	const hasUser = await UserModel.find({ email });
	if (hasUser) res.status(400).json({ error: 'Email already exist' });

	await UserModel.create({ email, password, name, age });
	res.json({ message: 'A new User was created' });
});
