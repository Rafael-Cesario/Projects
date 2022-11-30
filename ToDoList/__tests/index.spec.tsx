import { describe, it, expect } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import Home from '../pages';

describe('Home Page', () => {
	it('Show the input add list', async () => {
		const { queryByPlaceholderText, getByText } = render(<Home />);
		const showInput = getByText('Criar Nova Lista');
		let input = queryByPlaceholderText('Nome da Lista');

		expect(input).toBeNull();
		fireEvent.click(showInput);
		input = queryByPlaceholderText('Nome da Lista');
		expect(input).not.toBeNull();
	});
});
