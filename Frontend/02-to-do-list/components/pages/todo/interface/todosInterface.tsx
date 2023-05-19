import { TTodos } from './todosType';

export interface ITodos {
	props: {
		todos: TTodos;
		setTodos: (todos: TTodos) => void;
		status: 'done' | 'current' | 'next';
	};
}
