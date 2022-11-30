import { TTodos } from '../../../../utils/todosType';

export interface ITodos {
	props: {
		todos: TTodos;
		setTodos: (todos: TTodos) => void;
		status: 'done' | 'current' | 'next';
	};
}
