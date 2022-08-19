import { describe, expect, it } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { Create } from './create';
import '@testing-library/jest-dom';

describe('Create Account', () => {
	it('Change the password input type', () => {
		const { getAllByLabelText, getAllByText } = render(<Create title={'teste'} />);
		const [passwordInput, confirmPasswordInput] = getAllByLabelText(/senha/i);
		const showPasswordButton = getAllByText(/mostrar senha/i)[0];

		expect(passwordInput.getAttribute('type')).toBe('password');
		expect(confirmPasswordInput.getAttribute('type')).toBe('password');

		fireEvent.click(showPasswordButton);

		expect(passwordInput.getAttribute('type')).toBe('text');
		expect(confirmPasswordInput.getAttribute('type')).toBe('text');
	});

	it.todo('Changes the field values');
	it.todo('Verify if the password is strong enough');
	it.todo('Show the user when a fields is wrong/empty');
});
