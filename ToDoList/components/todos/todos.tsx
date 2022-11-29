import { ITodos } from './todosInterface';
import { TodosStyle } from './todosStyle';

export const Todos = ({ props }: ITodos) => {
	const { todos, status } = props;

	const showOptions = (e: React.SyntheticEvent) => {
		const button = e.target as HTMLButtonElement;
		const nextElement = button.nextElementSibling as HTMLDivElement;
		nextElement.classList.toggle('active');
	};

	const changeTodoStatus = (todo: string, newStatus: string) => {};

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
								<select name='' id='' defaultValue='Próxima' onChange={(e) => console.log({ todo }, e.target.value)}>
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
