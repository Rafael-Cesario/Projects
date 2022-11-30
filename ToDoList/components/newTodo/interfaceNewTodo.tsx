import { TTodos } from '../../utils/todosType';

export interface INewTodo {
	props: {
		todos: TTodos;
		setTodos: (todos:TTodos) => void;
	};
}
