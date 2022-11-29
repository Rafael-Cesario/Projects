import { TTodos } from '../../utils/todosType';

export interface ITodos {
	props: {
		todos: TTodos;
		status: 'done' | 'current' | 'next';
	};
}
