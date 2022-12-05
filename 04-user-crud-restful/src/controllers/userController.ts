import { Request, Response } from 'express';
import { IUserRepository } from '../interface/userRepositoryInterface';
import { IUser } from '../interface/userSchemaInterface';
import { IUserValidation } from '../interface/userValidationInterface';

export class UserController {
	constructor(private userValidation: IUserValidation, private userRepository: IUserRepository) {}

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
}
