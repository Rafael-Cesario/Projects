import { json, Router } from 'express';

export const router = Router();

router.use(json());

router.get('/', (req, res) => {
	res.json({ message: 'Hello World' });
});
