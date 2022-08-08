import { userRepository } from '../repositories/user';
import { verifyFields, Body } from '../utils/verifyFields';

class UserController {
	async create(body: Body) {
		verifyFields(body);

		const userAlreadyExist = await userRepository.findByEmail(body.email);
		if (userAlreadyExist) throw new Error('A user with this email already exist.');

		const user = await userRepository.create(body);
		return user;
	}

	// read() {}
	// update() {}
	// delete() {}
}

export const User = new UserController();
