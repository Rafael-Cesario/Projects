import { Request, Response } from 'express';
import { UserRepository } from '../repositories/user';

class UserController {
	private userRepository = new UserRepository();

	async create(request: Request, response: Response) {
		const user = await this.userRepository.create(request.body);
		return response.status(201).json({ user });
	}

	// read() {}
	// update() {}
	// delete() {}
}

export const User = new UserController();
