import Head from 'next/head';
import { useState } from 'react';
import { Message } from '../components/message/message';
import { NewList } from '../components/newList/newList';
import { AppStyle } from '../styles/appStyle';
import { MessageType } from '../utils/messageType';
import { global } from '../styles/appStyle';

export default function Home() {
	const [lists, setLists] = useState<Set<string>>(new Set());
	const [newList, setNewList] = useState<boolean>(false);

	const [message, setMessage] = useState<MessageType>({
		show: false,
		color: global.red,
		content: 'Uma lista com este nome já existe',
	});

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
						<button className='menu' onClick={() => setNewList(!newList)}>
							Criar Nova Lista
						</button>
						<button className='menu'>Minhas Listas</button>
						<button className='menu'>Página no Github</button>
					</div>
				</header>

				<main>
					<div className='lists'>
						{newList && <NewList props={{ newList, setNewList, lists, setLists, message, setMessage }} />}

						<button className='list'>Programação</button>
						<button className='list'>Programação</button>
						<button className='list'>Programação</button>
					</div>
				</main>

				{message.show && (
					<Message
						props={{
							message: message.content,
							color: message.color,
						}}
					/>
				)}
			</AppStyle>
		</>
	);
}
