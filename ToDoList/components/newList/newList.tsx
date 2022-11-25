import produce from 'immer';
import { useEffect, useState } from 'react';
import { INewList } from './newListInterface';
import { NewListStyle } from './newListStyle';
import { global } from '../../styles/appStyle';

export const NewList = ({ props }: INewList) => {
	const { setNewList, lists, setLists, message, setMessage } = props;
	const [listName, setListName] = useState('');

	const sendErrorMessage = () => {
		const showMessage = produce(message, (draft) => {
			draft['show'] = true;
			draft['content'] = 'Uma lista com este nome já existe';
			draft['color'] = global.red;
		});

		const hideMessage = produce(message, (draft) => {
			draft['show'] = false;
		});

		setMessage(showMessage);
		setTimeout(() => setMessage(hideMessage), 5000);
	};

	const createNewList = () => {
		if (lists.has(listName)) return sendErrorMessage();

		const newLists = produce(lists, (draft) => {
			draft.add(listName);
		});

		setLists(newLists);
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
