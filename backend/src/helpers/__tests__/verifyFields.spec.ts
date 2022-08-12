/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, expect, it } from 'vitest';
import { verifyFields } from '../verifyFields';

describe('Verify Fields must...', () => {
	it('Throw a error when a fields is empty', () => {
		try {
			verifyFields({ email: '', name: '', password: '' });
			expect(true).toBe(false);
		} catch (error: any) {
			expect(error.message).toBe('Email is required, Name is required, Password is required');
		}
	});

	it('Not throw an error when all the fields are filled.', () => {
		try {
			verifyFields({ email: 'test@test.com', name: 'test', password: 'test123' });
		} catch (error: any) {
			expect(true).toBe(false);
		}
	});
});
