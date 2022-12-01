import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { fireEvent, screen, render } from '@testing-library/react';
import Home from '../pages';

describe('Home Page', () => {
	const createNewList = (listName: string | undefined) => {
		const showInput = screen.getByText('Criar Nova Lista');
		fireEvent.click(showInput);

		const input = screen.queryByPlaceholderText('Nome da Lista') as HTMLInputElement;
		const addNewTodo = screen.getByText('Criar Lista') as HTMLButtonElement;

		fireEvent.change(input, { target: { value: listName } });
		fireEvent.click(addNewTodo);
	};

	it('Show the input add list', async () => {
		render(<Home />);

		let input = screen.queryByPlaceholderText('Nome da Lista') as HTMLInputElement;
		expect(input).toBeNull();

		const showInput = screen.getByText('Criar Nova Lista');
		fireEvent.click(showInput);

		input = screen.queryByPlaceholderText('Nome da Lista') as HTMLInputElement;
		expect(input).not.toBeNull();
	});

	it('Creates a new lists and show in the page', () => {
		render(<Home />);
		createNewList('New Todo');
		expect(screen.getByText('New Todo'.toLowerCase())).toHaveTextContent('New Todo'.toLowerCase());
	});

	it(`Can't create empty lists`, () => {
		render(<Home />);
		createNewList(undefined);
		expect(screen.getByText('A lista precisa de um nome.')).toBeInTheDocument();
	});

	it(`Can't create duplicated lists`, () => {
		render(<Home />);
		createNewList('List01');
		createNewList('List01');
		expect(screen.getByText('Uma lista com este mesmo nome já existe.')).toBeInTheDocument();
	});
});
