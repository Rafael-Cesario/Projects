import express, { Request, Response } from 'express';
import { IUser } from '../interface/userInterface';
import { UserModel } from '../schema/userSchema';

export const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
	const { email, password, name, age } = req.body as IUser;

	if (!email) return res.status(400).json({ error: 'Email is required' });

	const users = await UserModel.find({ email });
	const hasUser = users.length > 0;
	if (hasUser) return res.status(400).json({ error: 'Email already exist' });

	await UserModel.create({ email, password, name, age });
	res.status(200).json({ message: 'A new User was created' });
});

router.get('/', async (req: Request, res: Response) => {
	const users = await UserModel.find({});
	res.status(200).json({ users });
});

router.patch('/', async (req: Request, res: Response) => {
	const { email, update } = req.body as { email: string; update: {} };

	if (!email) return res.status(400).json({ error: 'Email is required' });
	if (!update) return res.status(400).json({ error: 'A update OBJ is required' });

	await UserModel.findOneAndUpdate({ email }, { ...update });
	res.status(200).json({ message: `User ${email} was updated` });
});

router.delete('/', async (req: Request, res: Response) => {
	const { email } = req.body as { email: string };

	if (!email) return res.status(400).json({ error: 'Email is required' });

	await UserModel.findOneAndDelete({ email });
	res.status(200).json({ message: `User ${email} was deleted` });
});
