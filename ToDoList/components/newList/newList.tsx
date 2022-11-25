import { INewList } from './newListInterface';
import { NewListStyle } from './newListStyle';

export const NewList = ({ props }: INewList) => {
	const { newList, setNewList, lists, setLists } = props;

	return (
		<NewListStyle>
			{newList && (
				<>
					<input type={'text'} />

					<div className='menus'>
						<button>Criar Lista</button>
						<button>Cancelar</button>
					</div>
				</>
			)}
		</NewListStyle>
	);
};
