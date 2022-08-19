import { describe, it, expect } from 'vitest';
import { verifyFields } from './verifyFields';

describe('Verify Fields', () => {
	it('Returns a array with length 0', () => {
		const invalidFields = verifyFields({ name: 'Teste' });
		expect(invalidFields.length).toBe(0);
	});

	it('Returns a array with length 1', () => {
		const invalidFields = verifyFields({ name: '' });
		expect(invalidFields.length).toBe(1);
	});
});
