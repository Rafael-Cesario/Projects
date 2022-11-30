import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { fireEvent, screen, render, getByRole, queryByRole } from '@testing-library/react';
import Home from '../pages';
import { act } from 'react-dom/test-utils';

describe('Home Page', () => {
	it('Show the input add list', async () => {
		const { queryByPlaceholderText, getByText } = render(<Home />);

		const showInput = getByText('Criar Nova Lista');
		let input = queryByPlaceholderText('Nome da Lista') as HTMLInputElement;

		expect(input).toBeNull();

		act(() => {
			fireEvent.click(showInput);
		});

		input = queryByPlaceholderText('Nome da Lista') as HTMLInputElement;
		expect(input).not.toBeNull();
	});

	it('Creates a new lists and show in the page', () => {
		render(<Home />);

		const showInput = screen.getByText('Criar Nova Lista') as HTMLButtonElement;

		act(() => {
			fireEvent.click(showInput);
		});

		const text = 'New todo';
		const input = screen.getByPlaceholderText('Nome da Lista') as HTMLInputElement;
		const addNewTodo = screen.getByText('Criar Lista') as HTMLButtonElement;

		act(() => {
			fireEvent.change(input, { target: { value: text } });
			fireEvent.click(addNewTodo);
		});

		expect(screen.getByText(text.toLowerCase())).toHaveTextContent(text.toLowerCase());
	});
});
