import { Request, Response } from 'express';
import { UserRepository } from '../repositories/user';
import { verifyFields } from '../helpers/verifyFields';

class UserController {
	private UserRepository = new UserRepository();

	async create(request: Request, response: Response) {
		try {
			const { body } = request;
			verifyFields(body);

			const userAlreadyExist = await this.UserRepository.findByEmail(body.email);
			if (userAlreadyExist) throw new Error('A user with this email already exist.');

			const user = await this.UserRepository.create(body);
			return response.status(201).json({ user });
		} catch (error: any) {
			return response.status(400).send(error.message);
		}
	}
}

export const User = new UserController();
