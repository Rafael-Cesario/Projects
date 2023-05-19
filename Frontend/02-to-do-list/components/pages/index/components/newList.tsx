import produce from 'immer';
import { useEffect, useState } from 'react';
import { global } from '../../../../styles/appStyle';
import { sendMessage } from '../../../../utils/sendMessage';
import { INewList } from '../interface/newListInterface';
import { NewListStyle } from '../style/newListStyle';

export const NewList = ({ props }: INewList) => {
	const { setShowNewList, lists, setLists, message, setMessage } = props;
	const [listName, setListName] = useState('');

	const createNewList = () => {
		if (!listName) return sendMessage(message, setMessage, 'A lista precisa de um nome.', global.red);
		if (lists.includes(listName.toLowerCase())) return sendMessage(message, setMessage, 'Uma lista com este mesmo nome já existe.', global.red);

		const newLists = produce(lists, (draft) => {
			draft.push(listName.toLowerCase());
		});

		setShowNewList(false);
		setLists(newLists);
		sendMessage(message, setMessage, 'Uma nova lista foi criada.', 'forestgreen');
		setListName('');
	};

	useEffect(() => {
		const input = document.querySelector('.list-name') as HTMLInputElement;
		input.focus();
	}, []);

	return (
		<NewListStyle>
			<input
				value={listName}
				onChange={(e) => setListName(e.target.value)}
				placeholder='Nome da Lista'
				className='list-name'
				type={'text'}
				onKeyUp={(e) => {
					e.key === 'Enter' && createNewList();
				}}
			/>

			<div className='menus'>
				<button onClick={() => createNewList()} className='menu'>
					Criar Lista
				</button>
				<button onClick={() => setShowNewList(false)} className='menu'>
					Cancelar
				</button>
			</div>
		</NewListStyle>
	);
};
