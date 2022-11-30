import { fireEvent, render } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { TTodos } from '../../utils/todosType';
import { NewTodo } from './newTodo';

let todos: TTodos = {
	next: [],
	done: [],
	current: [],
};

const setTodos = (newTodos: TTodos) => {
	todos = newTodos;
};

const resetTodos = () => {
	todos = {
		next: [],
		done: [],
		current: [],
	};
};

describe('Component new todo', () => {
	beforeEach(() => resetTodos());

	const { getByRole, getByLabelText } = render(<NewTodo props={{ todos, setTodos }} />);
	const todoInput = getByLabelText('newTodoInput') as HTMLInputElement;
	const btnAddNewTodo = getByRole('button') as HTMLButtonElement;

	it('Add a new todo', () => {
		fireEvent.change(todoInput, { target: { value: 'here is my new todo test.' } });
		btnAddNewTodo.click();

		expect(todos.next.length).toBe(1);
	});

	it(`Can't add a new todo, input is empty`, () => {
		btnAddNewTodo.click();
		expect(todos.next.length).toBe(0);
	});
});
