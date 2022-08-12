/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { UserRepository } from '../repositories/user';
import { verifyFields } from '../helpers/verifyFields';

export class UserController {
	constructor(private userRepository = new UserRepository(), private validateBody = verifyFields) {}

	async create(request: Request, response: Response) {
		try {
			const { body } = request;
			this.validateBody(body);

			const userAlreadyExist = await this.userRepository.findByEmail(body.email);
			if (userAlreadyExist) throw new Error('A user with this email already exist.');

			const user = await this.userRepository.create(body);
			return response.status(201).json({ user });
		} catch (error: any) {
			return response.status(400).send(error.message);
		}
	}
}
