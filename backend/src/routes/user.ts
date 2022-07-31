import { Router } from 'express';
import { Users } from '../controllers/user';

export const router = Router();

// Create

router.post('/', (request, response) => {
	return Users.create(request, response);
});

// Read

router.get('/', (request, response) => {
	return Users.getAll(response);
});

router.get('/:id', (request, response) => {
	return Users.getOne(request, response);
});

// Update

router.put('/', (request, response) => {
	return Users.updateOne(request, response);
});

// Delete

router.delete('/', (request, response) => {
	return Users.deleteOne(request, response);
});
