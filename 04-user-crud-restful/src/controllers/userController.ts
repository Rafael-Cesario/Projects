import { Request, Response } from 'express';
import { IUser } from '../interface/userInterface';
import { UserModel } from '../schema/userSchema';
import { UserValidation } from '../validation/userValidation';

const userValidation = new UserValidation();

export class UserController {
	async create(req: Request, res: Response) {
		const { email, password, name, age } = req.body as IUser;

		const [isDataValid, message] = userValidation.data({ email, password, name, age });
		if (!isDataValid) return res.status(400).json({ error: message });

		const hasUser = await userValidation.duplicate(email);
		if (hasUser) return res.status(400).json({ error: 'Email already exist' });

		await UserModel.create({ email, password, name, age });
		res.status(200).json({ message: 'A new user was created' });
	}
}
