import Link from 'next/link';
import { ListsStyle } from '../style/listsStyle';
import { ILists } from '../interface/listsInterface';

export const Lists = ({ props }: ILists) => {
	const { lists } = props;

	return (
		<ListsStyle>
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
