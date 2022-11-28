import { ILists } from './listsInterface';
import { NewList } from '../newList/newList';
import { ListsStyle } from './listsStyle';
import Link from 'next/link';

export const Lists = ({ props }: ILists) => {
	const { lists, setLists, showNewList, setShowNewList, message, setMessage } = props;

	return (
		<ListsStyle>
			{showNewList && <NewList props={{ showNewList, setShowNewList, lists, setLists, message, setMessage }} />}

			{lists.map((list, index) => {
				const listName = list.replace(' ', '-').toLowerCase();

				return (
					<Link className='list' key={list + index} href={`/${listName}`}>
						{list}
					</Link>
				);
			})}
		</ListsStyle>
	);
};
