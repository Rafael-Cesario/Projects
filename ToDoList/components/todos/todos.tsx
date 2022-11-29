import produce from 'immer';
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

	const changeTodoStatus = (index: number, newStatus: TypeStatus, e: React.SyntheticEvent) => {
		const element = e.target as HTMLSelectElement;
		const button = element.parentElement?.parentElement?.previousSibling as HTMLButtonElement;
		button.click();

		setTodos(
			produce(todos, (draft) => {
				const [todo] = draft[status].splice(index, 1);
				draft[newStatus].push(todo);
				return draft;
			})
		);
	};

	const deleteTodo = (index: number) => {
		const state = produce(todos, (draft) => {
			draft[status].splice(index, 1);
		});

		setTodos(state);
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
								<select name='' id='' defaultValue={status} onBlur={(e) => changeTodoStatus(index, e.target.value as TypeStatus, e)}>
									<option value='done'>Concluida</option>
									<option value='current'>Em progresso</option>
									<option value='next'>Próxima</option>
								</select>
							</div>

							<div className='menus'>
								<button onClick={() => console.log('create a funciton to edit todo')}>Editar</button>
								<button onClick={() => deleteTodo(index)}>Excluir</button>
							</div>
						</div>
					</TodosStyle>
				);
			})}
		</>
	);
};
