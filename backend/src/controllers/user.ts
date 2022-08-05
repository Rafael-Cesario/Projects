import { UserRepository } from '../repositories/user';

type Body = { email: string; name: string; password: string };

class UserController {
	private userRepository = new UserRepository();

	private verifyFields = (body: Body) => {
		const errorMessage: string[] = [];
		const fields = [
			['email', body.email],
			['name', body.name],
			['password', body.password],
		];

		fields.forEach(([key, value]) => {
			if (!value) errorMessage.push(`${key.slice(0, 1).toUpperCase()}${key.slice(1)} is required`);
		});

		if (errorMessage.length > 0) throw new Error(errorMessage.join(', '));
	};

	async create(body: Body) {
		this.verifyFields(body);

		const userAlreadyExist = await this.userRepository.findByEmail(body.email);
		if (userAlreadyExist) throw new Error('A user with this email already exist.');

		const user = await this.userRepository.create(body);
		return user;
	}

	// read() {}
	// update() {}
	// delete() {}
}

export const User = new UserController();
