import Head from 'next/head';
import { global } from '../styles/appStyle';
import { AppStyle } from '../styles/appStyle';
import { Lists } from '../components/pages/index/components/lists';
import { useLocalLists } from '../utils/useLocalDatabase';
import { useState } from 'react';
import { MessageType } from '../utils/messageType';
import { Message } from '../components/message/message';
import { NewList } from '../components/pages/index/components/newList';

export default function Home() {
	const [lists, setLists] = useLocalLists([], 'lists');
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
				<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
				<title>To Do List</title>
			</Head>

			<AppStyle>
				{message.show && <Message props={{ message: message.content, color: message.color }} />}

				<div className='title'>
					<h1>To Do List</h1>
					<p>Seu Aplicativo de tarefas</p>
				</div>

				<div className='app-menus'>
					<button className='menu' onClick={() => setShowNewList(!showNewList)}>
						Criar Nova Lista
					</button>
					<button className='menu'>Página no Github</button>
				</div>

				{showNewList && <NewList props={{ showNewList, setShowNewList, lists, setLists, message, setMessage }} />}

				<Lists props={{ lists }} />
			</AppStyle>
		</>
	);
}
