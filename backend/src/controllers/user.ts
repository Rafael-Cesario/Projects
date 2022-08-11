import { Request, Response } from 'express';
import { userRepository } from '../repositories/user';
import { verifyFields } from '../utils/verifyFields';

class UserController {
	async create(request: Request, response: Response) {
		try {
			const { body } = request;
			verifyFields(body);

			const userAlreadyExist = await userRepository.findByEmail(body.email);
			if (userAlreadyExist) throw new Error('A user with this email already exist.');

			const user = await userRepository.create(body);
			return response.status(201).json({ user });
		} catch (error: any) {
			return response.status(400).send(error.message);
		}
	}
}

export const User = new UserController();
