import produce from 'immer';
import { useState } from 'react';
import { INewTodo } from './interfaceNewTodo';
import { SNewTodo } from './styleNewTodo';

export const NewTodo = ({ props }: INewTodo) => {
	const { todos, setTodos } = props;
	const [todoValue, setTodoValue] = useState('');

	const addNewTodo = () => {
		if (!todoValue) return;

		const newTodos = produce(todos, (draft) => {
			draft.next.push(todoValue);
		});

		setTodos(newTodos);
		setTodoValue('');
	};

	return (
		<SNewTodo className='add-new-todo'>
			<input
				aria-label='newTodoInput'
				type='text'
				placeholder='Digite aqui para adicionar uma nova tarefa...'
				value={todoValue}
				onChange={(e) => setTodoValue(e.target.value)}
				onKeyDown={(e) => e.key === 'Enter' && addNewTodo()}
			/>
			<button onClick={() => addNewTodo()}>+</button>
		</SNewTodo>
	);
};
