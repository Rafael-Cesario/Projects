import produce from 'immer';
import { useEffect, useState } from 'react';
import { global } from '../../styles/appStyle';
import { sendMessage } from '../../utils/sendMessage';
import { INewList } from './newListInterface';
import { NewListStyle } from './newListStyle';

export const NewList = ({ props }: INewList) => {
	const { setNewList, lists, setLists, message, setMessage } = props;
	const [listName, setListName] = useState('');

	const createNewList = () => {
		if (lists.has(listName)) return sendMessage(message, setMessage, 'Uma lista com este mesmo nome já existe.', global.red);

		const newLists = produce(lists, (draft) => {
			draft.add(listName);
		});

		setLists(newLists);
		sendMessage(message, setMessage, 'Uma nova lista foi criada.', 'forestgreen');
	};

	useEffect(() => console.log(lists), [lists]);

	return (
		<NewListStyle>
			<input value={listName} onChange={(e) => setListName(e.target.value)} placeholder='Nome da Lista' className='list-name' type={'text'} />

			<div className='menus'>
				<button onClick={() => createNewList()} className='menu'>
					Criar Lista
				</button>
				<button onClick={() => setNewList(false)} className='menu'>
					Cancelar
				</button>
			</div>
		</NewListStyle>
	);
};
