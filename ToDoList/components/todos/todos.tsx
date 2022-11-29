import produce from 'immer';
import { useEffect } from 'react';
import { TypeStatus } from '../../utils/todosType';
import { ITodos } from './todosInterface';
import { TodosStyle } from './todosStyle';

export const Todos = ({ props }: ITodos) => {
	const { todos, setTodos, status } = props;

	const showOptions = (e: React.SyntheticEvent) => {
		const button = e.target as HTMLButtonElement;
		const nextElement = button.nextElementSibling as HTMLDivElement;
		nextElement.classList.toggle('active');
	};

	const changeTodoStatus = (todo: string, newStatus: TypeStatus, e: React.SyntheticEvent) => {
		const element = e.target as HTMLSelectElement;
		const button = element.parentElement?.parentElement?.previousSibling as HTMLButtonElement;
		button.click();

		setTodos(
			produce(todos, (draft) => {
				const index = draft[status].indexOf(todo);
				draft[status].splice(index, 1);
				draft[newStatus].push(todo);
				return draft;
			})
		);
	};

	return (
		<>
			{todos[status].map((todo, index) => {
				return (
					<TodosStyle key={index}>
						<button onClick={(e) => showOptions(e)} className={`todo ${status}`}>
							{todo}
						</button>

						<div className='options'>
							<div className='status'>
								<span>Status:</span>
								<select name='' id='' defaultValue={status} onBlur={(e) => changeTodoStatus(todo, e.target.value as TypeStatus, e)}>
									<option value='done'>Concluida</option>
									<option value='current'>Em progresso</option>
									<option value='next'>Próxima</option>
								</select>
							</div>

							<div className='menus'>
								<button>Editar</button>
								<button>Excluir</button>
							</div>
						</div>
					</TodosStyle>
				);
			})}
		</>
	);
};
