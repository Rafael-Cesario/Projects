import { UserRepository } from '../repositories/user';
import { compare } from 'bcrypt';
import { jwtConfig } from '../configs/jwtConfig';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

class AuthController {
	private UserRepository = new UserRepository();

	async login(request: Request, response: Response) {
		try {
			const { email, password } = request.body;

			const user = await this.UserRepository.findByEmail(email);
			if (!user) throw new Error('Email Or Password Is Wrong!');

			const isPasswordRight = await compare(password, user.password);
			if (!isPasswordRight) throw new Error('Email Or Password Is Wrong!');

			const { secret, expiresIn } = jwtConfig;
			const token = jwt.sign({}, secret, { expiresIn });

			return response.status(200).json({ token, user });
		} catch (error: any) {
			return response.status(400).send(error.message);
		}
	}
}

export const Auth = new AuthController();
