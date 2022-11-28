import produce from 'immer';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ListStyle } from '../styles/listStyle';
import { useLocalTodos } from '../utils/useLocalTodos';

const capitalize = (string: string) => {
	const split = string.split(' ');

	for (let word in split) {
		const firstLetter = split[word].slice(0, 1).toUpperCase();
		const restLetters = split[word].slice(1);

		split[word] = firstLetter + restLetters;
	}

	return split.join(' ');
};

export default () => {
	const router = useRouter();

	const [todoValue, setTodoValue] = useState('');
	const [listName, setListName] = useState('');
	const [todos, setTodos] = useLocalTodos(listName);
	const [showOptions, setShowOptions] = useState(false);

	useEffect(() => {
		const query = String(router.query.list);
		const listName = capitalize(query.replace('-', ' '));
		setListName(listName);
	}, [router]);

	const addNewTodo = () => {
		const newTodos = produce(todos, (draft) => {
			draft.next.push(todoValue);
		});

		setTodos(newTodos);
		setTodoValue('');
	};

	return (
		<>
			<Head>
				<link href='https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap' rel='stylesheet' />
				<title>{listName}</title>
			</Head>

			<ListStyle>
				<h1 className='title'>{listName}</h1>

				<div className='menu'>
					<Link className='link' href={'/'}>
						Voltar
					</Link>
					<button className='delete-list'>Excluir Lista</button>
				</div>

				<div className='add-new-todo'>
					<input
						type='text'
						placeholder='Digite aqui para adicionar uma nova tarefa...'
						value={todoValue}
						onChange={(e) => setTodoValue(e.target.value)}
						onKeyDown={(e) => e.key === 'Enter' && addNewTodo()}
					/>
					<button onClick={() => addNewTodo()}>+</button>
				</div>

				{todos.next.map((todo, index) => {
					return (
						<div key={index} className='todos'>
							<button
								onClick={(e: React.SyntheticEvent) => {
									const button = e.target as HTMLButtonElement;
									const nextElement = button.nextElementSibling as HTMLDivElement;
									nextElement.classList.toggle('active');
								}}
								className='todo next'
							>
								{todo}
							</button>

							<div className='options'>
								<div className='status'>
									<span>Status:</span>
									<select name='' id='' defaultValue='Próxima'>
										<option value='Concluida'>Concluida</option>
										<option value='Fazendo'>Fazendo</option>
										<option value='Próxima'>Próxima</option>
									</select>
								</div>

								<div className='menus'>
									<button>Editar</button>
									<button>Excluir</button>
								</div>
							</div>
						</div>
					);
				})}
			</ListStyle>
		</>
	);
};
