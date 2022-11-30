import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { NewTodo } from '../components/pages/todo/components/newTodo';
import { Todos } from '../components/pages/todo/components/todos';
import { ListStyle } from '../styles/listStyle';
import { useLocalTodos } from '../utils/useLocalTodos';

const capitalizeFirstLetters = (string: string) => {
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

	const [listName, setListName] = useState('');
	const [listNameInput, setListNameInput] = useState('');
	const [todos, setTodos] = useLocalTodos(listName.toLowerCase());

	useEffect(() => {
		const query = String(router.query.list);
		const listName = capitalizeFirstLetters(query.replace(/-/g, ' '));
		setListName(listName);
	}, [router]);

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

				<NewTodo props={{ todos, setTodos }} />

				<Todos props={{ todos, setTodos, status: 'done' }} />
				<Todos props={{ todos, setTodos, status: 'current' }} />
				<Todos props={{ todos, setTodos, status: 'next' }} />
			</ListStyle>
		</>
	);
};
