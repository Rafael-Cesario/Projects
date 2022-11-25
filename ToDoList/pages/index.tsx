import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Message } from '../components/message/message';
import { NewList } from '../components/newList/newList';
import { AppStyle } from '../styles/appStyle';
import { MessageType } from '../utils/messageType';
import { global } from '../styles/appStyle';

export default function Home() {
	const [lists, setLists] = useState<string[]>([]);
	const [showNewList, setShowNewList] = useState<boolean>(false);

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
						<button className='menu' onClick={() => setShowNewList(!showNewList)}>
							Criar Nova Lista
						</button>
						<button className='menu'>Minhas Listas</button>
						<button className='menu'>Página no Github</button>
					</div>
				</header>

				<main>
					<div className='lists'>
						{showNewList && <NewList props={{ newList: showNewList, setNewList: setShowNewList, lists, setLists, message, setMessage }} />}

						{lists.map((list, index) => (
							<button key={list + index} className='list'>
								{list}
							</button>
						))}
					</div>
				</main>
			</AppStyle>

			{message.show && <Message props={{ message: message.content, color: message.color }} />}
		</>
	);
}
