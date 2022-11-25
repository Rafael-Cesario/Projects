import Head from 'next/head';
import { useState } from 'react';
import { NewList } from '../components/newList/newList';
import { AppStyle } from '../styles/appStyle';

export default function Home() {
	const [lists, setLists] = useState<string[]>([]);
	const [newList, setNewList] = useState<boolean>(false);

	return (
		<>
			<Head>
				<link href='https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap' rel='stylesheet' />
				<title>To Do List</title>
			</Head>

			<AppStyle>
				<header>
					<div className='title'>
						<h1>To Do List</h1>
						<p>Seu Aplicativo de tarefas</p>
					</div>

					<div className='menus'>
						<button onClick={() => setNewList(!newList)}>Criar Nova Lista</button>
						<button>Minhas Listas</button>
						<button>Página no Github</button>
					</div>
				</header>

				<main>
					<div className='lists'>
						<NewList props={{ newList, setNewList, lists, setLists }} />

						<button>Programação</button>
						<button>Programação</button>
						<button>Programação</button>
					</div>
				</main>
			</AppStyle>
		</>
	);
}
