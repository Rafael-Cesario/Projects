import { TTodos } from './todosType';

export interface INewTodo {
	props: {
		todos: TTodos;
		setTodos: (todos:TTodos) => void;
	};
}
