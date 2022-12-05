import express, { Request, Response } from 'express';
import { UserController } from '../controllers/userController';
import { UserRepository } from '../repository/userRepository';
import { UserModel } from '../schema/userSchema';
import { UserValidation } from '../validation/userValidation';

const router = express.Router();
const userValidation = new UserValidation();
const userRepository = new UserRepository(UserModel);
const userController = new UserController(userValidation, userRepository);

router.post('/', async (req: Request, res: Response) => userController.create(req, res));
router.get('/', async (req: Request, res: Response) => userController.get(req, res));
router.patch('/', async (req: Request, res: Response) => userController.update(req, res));

router.delete('/', async (req: Request, res: Response) => {
	const { email } = req.body as { email: string };

	if (!email) return res.status(400).json({ error: 'Email is required' });

	await UserModel.findOneAndDelete({ email });
	res.status(200).json({ message: `User ${email} was deleted` });
});

export { router };
