import express, { Request, Response } from 'express';
import { UserController } from '../controllers/userController';

const router = express.Router();
const userController = new UserController();

router.post('/', async (req: Request, res: Response) => userController.create(req, res));
router.get('/', async (req: Request, res: Response) => userController.get(req, res));
router.patch('/', async (req: Request, res: Response) => userController.update(req, res));
router.delete('/', async (req: Request, res: Response) => userController.delete(req, res));

export { router };
