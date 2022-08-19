import { describe, it, expect } from 'vitest';
import { verifyFields } from './verifyFields';

describe('Verify Fields', () => {
	it('Returns false, there is no empty fields', () => {
		const invalidFields = verifyFields({ name: 'Teste' });
		expect(invalidFields).toBe(false);
	});

	it('Returns a array with the empty field', () => {
		const invalidFields = verifyFields({ name: '' });
		expect(invalidFields).toEqual(['name']);
	});
});
