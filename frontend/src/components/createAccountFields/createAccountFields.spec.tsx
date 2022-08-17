import { fireEvent, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CreateAccountFields } from './createAccountFields';

describe('Create Account Form', () => {
	it('Change the password input type', () => {
		const { getAllByLabelText, getAllByText } = render(<CreateAccountFields />);
		const passwordInput = getAllByLabelText(/senha/i)[0];
		const confirmPasswordInput = getAllByLabelText(/senha/i)[1];

		const showPasswordButton = getAllByText(/mostrar senha/i)[0];

		expect(passwordInput.getAttribute('type')).toBe('password');
		expect(confirmPasswordInput.getAttribute('type')).toBe('password');

		fireEvent.click(showPasswordButton);

		expect(confirmPasswordInput.getAttribute('type')).toBe('text');
	});
});
