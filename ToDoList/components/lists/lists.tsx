import { global } from '../../styles/appStyle';
import { NewList } from '../newList/newList';
import { ListsStyle } from './listsStyle';
import Link from 'next/link';
import { useState } from 'react';
import { useLocalLists } from '../../utils/useLocalDatabase';
import { MessageType } from '../../utils/messageType';
import { Message } from '../message/message';

export const Lists = () => {
	const [lists, setLists] = useLocalLists([], 'lists');
	const [showNewList, setShowNewList] = useState<boolean>(false);

	const [message, setMessage] = useState<MessageType>({
		show: false,
		color: global.red,
		content: 'Uma lista com este nome já existe',
	});

	return (
		<ListsStyle>
			{message.show && <Message props={{ message: message.content, color: message.color }} />}

			<div className='app-menus'>
				<button className='menu' onClick={() => setShowNewList(!showNewList)}>
					Criar Nova Lista
				</button>
				<button className='menu'>Página no Github</button>
			</div>

			{showNewList && <NewList props={{ showNewList, setShowNewList, lists, setLists, message, setMessage }} />}

			{lists.map((list, index) => {
				const listName = list.replace(/ /g, '-').toLowerCase();

				return (
					<Link className='list' key={list + index} href={`/${listName}`}>
						{list}
					</Link>
				);
			})}
		</ListsStyle>
	);
};
