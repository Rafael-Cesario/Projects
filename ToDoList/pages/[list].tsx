import produce from 'immer';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Todos } from '../components/todos/todos';
import { ListStyle } from '../styles/listStyle';
import { sendMessage } from '../utils/sendMessage';
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
	const [listNameInput, setListNameInput] = useState('');
	const [todos, setTodos] = useLocalTodos(listName.toLowerCase());

	useEffect(() => {
		const query = String(router.query.list);
		const listName = capitalize(query.replace(/-/g, ' '));
		setListName(listName);
	}, [router]);

	const addNewTodo = () => {
		const newTodos = produce(todos, (draft) => {
			draft.next.push(todoValue);
		});

		setTodos(newTodos);
		setTodoValue('');
	};

	const deleteList = () => {
		const storage = localStorage.getItem('lists') as string;
		const lists = JSON.parse(storage) as string[];
		const index = lists?.indexOf(listName.toLowerCase());

		lists.splice(index, 1);

		localStorage.setItem('lists', JSON.stringify(lists));
		localStorage.removeItem(listName);

		router.push('/');
	};

	const changeListName = () => {
		if (!listNameInput) return;
		if (listNameInput.includes('-')) return;

		const storage = localStorage.getItem('lists') as string;
		const lists = JSON.parse(storage) as string[];

		let listIndex = 0;
		for (let list of lists) {
			if (listName.toLowerCase() === list.toLowerCase()) break;
			listIndex++;
		}

		lists[listIndex] = listNameInput;

		localStorage.setItem('lists', JSON.stringify(lists));
		localStorage.setItem(listNameInput.toLowerCase(), JSON.stringify(todos));
		localStorage.removeItem(listName.toLowerCase());

		router.push(`/${listNameInput}`);
	};

	return (
		<>
			<Head>
				<link href='https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap' rel='stylesheet' />
				<title>{listName}</title>
			</Head>

			<ListStyle>
				<input
					className='title'
					type='text'
					placeholder={listName}
					onChange={(e) => setListNameInput(e.target.value)}
					onBlur={() => changeListName()}
					onFocus={(e) => (e.target.value = listName)}
				/>

				<div className='menu'>
					<Link className='link' href={'/'}>
						Voltar
					</Link>
					<button className='delete-list' onClick={() => deleteList()}>
						Excluir Lista
					</button>
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

				<Todos props={{ todos, setTodos, status: 'done' }} />
				<Todos props={{ todos, setTodos, status: 'current' }} />
				<Todos props={{ todos, setTodos, status: 'next' }} />
			</ListStyle>
		</>
	);
};
