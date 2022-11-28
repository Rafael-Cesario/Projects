import { ILists } from './listsInterface';
import { NewList } from '../newList/newList';
import { ListsStyle } from './listsStyle';

export const Lists = ({ props }: ILists) => {
	const { lists, setLists, showNewList, setShowNewList, message, setMessage } = props;

	return (
		<ListsStyle>
			{showNewList && <NewList props={{ showNewList, setShowNewList, lists, setLists, message, setMessage }} />}

			{lists.map((list, index) => (
				<button key={list + index} className='list' onClick={() => console.log('teste')}>
					{list}
				</button>
			))}
		</ListsStyle>
	);
};
