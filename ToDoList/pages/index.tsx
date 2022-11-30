import Head from 'next/head';
import { useState } from 'react';
import { Message } from '../components/message/message';
import { AppStyle } from '../styles/appStyle';
import { MessageType } from '../utils/messageType';
import { global } from '../styles/appStyle';
import { useLocalLists } from '../utils/useLocalDatabase';
import { Lists } from '../components/lists/lists';

export default function Home() {
	return (
		<>
			<Head>
				<link href='https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap' rel='stylesheet' />
				<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
				<title>To Do List</title>
			</Head>

			<AppStyle>
				<div className='title'>
					<h1>To Do List</h1>
					<p>Seu Aplicativo de tarefas</p>
				</div>

				<Lists />
			</AppStyle>
		</>
	);
}
