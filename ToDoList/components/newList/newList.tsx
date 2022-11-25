import { INewList } from './newListInterface';
import { NewListStyle } from './newListStyle';

export const NewList = ({ props }: INewList) => {
	const { newList, setNewList, lists, setLists } = props;

	return (
		newList && (
			<NewListStyle>
				<input placeholder='Nome da Lista' className='list-name' type={'text'} />

				<div className='menus'>
					<button className='menu'>Criar Lista</button>
					<button className='menu'>Cancelar</button>
				</div>
			</NewListStyle>
		)
	);
};
