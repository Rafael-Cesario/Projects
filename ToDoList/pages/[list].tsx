import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ListStyle } from '../styles/listStyle';

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
	const query = String(router.query.list);
	const listName = capitalize(query.replace('-', ' '));

	return (
		<>
			<Head>
				<link href='https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap' rel='stylesheet' />
				<title>{listName}</title>
			</Head>

			<ListStyle>
				<h1 className='title'>{listName}</h1>

				<div className='menu'>
					<Link className='link' href={'/'}>Voltar</Link>
					<button className='delete-list'>Excluir Lista</button>
				</div>

				<div className='add-new-todo'>
					<input type='text' placeholder='Digite aqui para adicionar uma nova tarefa...' />
					<button>+</button>
				</div>
			</ListStyle>
		</>
	);
};
