import produce from 'immer';
import { useEffect, useState } from 'react';
import { INewList } from './newListInterface';
import { NewListStyle } from './newListStyle';

export const NewList = ({ props }: INewList) => {
	const { setNewList, lists, setLists } = props;
	const [listName, setListName] = useState('');

	const createNewList = () => {
		if (lists.has(listName)) return sendErrorMessage('Uma lista com este nome já existe');

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
