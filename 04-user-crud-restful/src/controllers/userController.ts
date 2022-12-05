import { Request, Response } from 'express';
import { IUserRepository } from '../interface/userRepositoryInterface';
import { IUser } from '../interface/userSchemaInterface';
import { IUserValidation } from '../interface/userValidationInterface';
import { UserRepository } from '../repository/userRepository';
import { UserModel } from '../schema/userSchema';
import { UserValidation } from '../validation/userValidation';

export class UserController {
	constructor(
		private userValidation: IUserValidation = new UserValidation(),
		private userRepository: IUserRepository = new UserRepository()
	) {}

	async create(req: Request, res: Response) {
		const { email, password, name, age } = req.body as IUser;

		const [isDataValid, message] = this.userValidation.data({ email, password, name, age });
		if (!isDataValid) return res.status(400).json({ error: message });

		const hasUser = await this.userValidation.duplicate(email);
		if (hasUser) return res.status(400).json({ error: 'Email already exist' });

		const hasError = await this.userRepository.createUser({ email, password, name, age });
		if (hasError) return res.status(400).json({ error: hasError });

		res.status(200).json({ message: 'A new user was created' });
	}

	async get(req: Request, res: Response) {
		const users = await UserModel.find({});
		res.status(200).json({ users });
	}

	async update(req: Request, res: Response) {
		const { email, update } = req.body as { email: string; update: {} };

		if (!email) return res.status(400).json({ error: 'Email is required' });
		if (!update) return res.status(400).json({ error: 'A update OBJ is required' });

		await UserModel.findOneAndUpdate({ email }, { ...update });
		res.status(200).json({ message: `User ${email} was updated` });
	}

	async delete(req: Request, res: Response) {
		const { email } = req.body as { email: string };

		if (!email) return res.status(400).json({ error: 'Email is required' });

		await UserModel.findOneAndDelete({ email });
		res.status(200).json({ message: `User ${email} was deleted` });
	}
}
