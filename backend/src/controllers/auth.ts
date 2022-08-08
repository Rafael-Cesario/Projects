import { userRepository } from '../repositories/user';
import { compare } from 'bcrypt';
import { jwtConfig } from '../utils/configs/jwtConfig';
import jwt from 'jsonwebtoken';

class AuthController {
	async login(email: string, password: string) {
		const user = await userRepository.findByEmail(email);
		if (!user) throw new Error('Email Or Password Is Wrong!');

		const isPasswordRight = await compare(password, user.password);
		if (!isPasswordRight) throw new Error('Email Or Password Is Wrong');

		const { secret, expiresIn } = jwtConfig;
		const token = jwt.sign({}, secret, { expiresIn });

		return { token, user };
	}
}

export const Auth = new AuthController();
