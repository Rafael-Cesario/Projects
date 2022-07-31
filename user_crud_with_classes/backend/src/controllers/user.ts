import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { User } from '../models/user';
import { UserRepository } from '../repositories/user';

class UserController {
	private UserRepository = new UserRepository();

	async create(request: Request, response: Response) {
		try {
			const alreadyExist = await this.UserRepository.findByEmail(request.body.email);
			if (alreadyExist) throw new Error('User already exist');

			const user = await this.UserRepository.createNew({ ...request.body });

			return response.status(201).json({ user });
		} catch (error: any) {
			return response.status(400).json({ error: error.message });
		}
	}

	async getAll(response: Response) {
		try {
			const users = await this.UserRepository.findAll();
			return response.status(200).json({ users });
		} catch (error: any) {
			return response.status(404).json({ error: error.message });
		}
	}

	async getOne(request: Request, response: Response) {
		try {
			const id = request.params.id;
			if (!mongoose.Types.ObjectId.isValid(id)) throw new Error('Id is not valid');

			const user = await User.findById(id);
			if (!user) throw new Error('User not found');

			return response.status(200).json({ user });
		} catch (error: any) {
			return response.status(404).json({ error: error.message });
		}
	}

	async updateOne(request: Request, response: Response) {
		try {
			const { id, update } = request.body;
			if (!mongoose.Types.ObjectId.isValid(id)) throw new Error('Id is not valid');
			if (!update) throw new Error('Pass a update Property');

			let user = await this.UserRepository.findOne({ _id: id });
			if (!user) throw new Error('User not found');

			await this.UserRepository.updateOne(user, update);
			return response.status(200).json({ user });
		} catch (error: any) {
			return response.status(404).json({ error: error.message });
		}
	}

	async deleteOne(request: Request, response: Response) {
		try {
			const { id } = request.body;

			await this.UserRepository.deleteOne(id);

			return response.status(200).json({ message: `User ${id} deleted` });
		} catch (error: any) {
			return response.status(404).json({ error: error.message });
		}
	}
}

export const Users = new UserController();
