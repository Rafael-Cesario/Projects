import { useContext } from "react";
import { favoriteContext } from "../../context/favoriteContext";
import { ListContext } from "../../context/listContext";
import { DeleteListConfirmationStyle } from "../../styles/sidebar/deleteListConfirmationStyle";
import { Cache_deleteAllFavorites } from "../../utils/dataBase/cache/favorites";
import { Cache_deleteList } from "../../utils/dataBase/cache/lists";

interface PropsDeleteList {
	listName: string;

	setConfirmDeleteList(newState: boolean): void;
	setListConfigs(newState: boolean): void;
}

export const DeleteListConfirmation = ({ listName, setConfirmDeleteList, setListConfigs }: PropsDeleteList) => {
	const { DBdeleteList } = useContext(ListContext);
	const { DBdeleteAllFavorites } = useContext(favoriteContext);

	const deleteList = () => {
		Cache_deleteAllFavorites(listName);
		DBdeleteAllFavorites({ variables: { list: listName } });

		Cache_deleteList(listName);
		DBdeleteList({ variables: { name: listName } });

		setListConfigs(false);
	};

	return (
		<DeleteListConfirmationStyle>
			<div className="container">
				<div className="top">
					<h1>Deletar Lista {listName}?</h1>
					<button onClick={() => setConfirmDeleteList(false)}>X</button>
				</div>
				<p>Deletar esta lista fará com que todos os seus favoritos salvos nela também sejam deletados!</p>
				<div className="confirm">
					<button className="delete" onClick={() => deleteList()}>
						Deletar
					</button>
					<button onClick={() => setConfirmDeleteList(false)}>Cancelar</button>
				</div>
			</div>
		</DeleteListConfirmationStyle>
	);
};
