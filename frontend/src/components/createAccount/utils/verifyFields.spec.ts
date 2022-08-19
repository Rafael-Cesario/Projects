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
			expect(isEmailValid.length).toBeGreaterThan(0);
		});

		it('Returns a empty array', () => {
			const isEmailValid = verify.email('teste@hotmail.com');
			expect(isEmailValid.length).toBe(0);
		});
	});

	describe('Password is valid', () => {
		it('Returns a array with messages, password isnt valid', () => {
			const isPasswordValid = verify.password('123');
			expect(isPasswordValid.length).toBeGreaterThan(0);
		});

		it('Returns a empty array, password is valid', () => {
			const isPasswordValid = verify.password('Teste@182584');
			expect(isPasswordValid.length).toBe(0);
		});

		describe('Confirm Password', () => {
			it('Returns false', () => {
				const isConfirmPasswordRight = verify.confirmPassword('teste123', 'teste');
				expect(isConfirmPasswordRight).toBe(false);
			});

			it('Returns true', () => {
				const isConfirmPasswordRight = verify.confirmPassword('teste123', 'teste123');
				expect(isConfirmPasswordRight).toBe(true);
			});
		});
	});
});
