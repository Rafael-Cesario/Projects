import { describe, it, expect } from 'vitest';
import { Verify } from './verifyFields';

describe('Verify Fields', () => {
	const verify = new Verify();

	describe('Empty Fields', () => {
		it('Returns a obj with the empty fields', () => {
			const emptyFields = verify.empty({ name: '', password: '' });

			expect(emptyFields).toHaveProperty('name', 'Campo Obrigatorio');
			expect(emptyFields).toHaveProperty('password', 'Campo Obrigatorio');
		});

		it('Returns a empty obj', () => {
			const emptyFields = verify.empty({ name: 'teste', password: 'teste' });
			expect(emptyFields).not.toHaveProperty('name');
			expect(emptyFields).not.toHaveProperty('password');
		});
	});

	describe('Email is valid', () => {
		it('Returns a array with the invalids steps', () => {
			const isEmailValid = verify.email('');
			expect(isEmailValid.length).toBe(4);
		});

		it('Returns a empty array', () => {
			const isEmailValid = verify.email('teste@hotmail.com');
			expect(isEmailValid.length).toBe(0);
		});
	});

	describe.todo('Password is valid');
});
