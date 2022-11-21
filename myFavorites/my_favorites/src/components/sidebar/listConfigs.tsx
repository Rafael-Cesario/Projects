import { useContext, useState } from "react";
import { BiTrashAlt } from "react-icons/bi";
import { MdDragIndicator } from "react-icons/md";
import { ListContext } from "../../context/listContext";
import { ListConfigsStyle } from "../../styles/sidebar/listConfigsStyle";
import { Cache_deleteTag, Cache_modifyTag } from "../../utils/dataBase/cache/tags";
import { inputError } from "../../utils/func/inputError";
import { produce } from "immer";
import { Cache_modifyList } from "../../utils/dataBase/cache/lists";
import { Cache_modifyFavorite } from "../../utils/dataBase/cache/favorites";
import { favoriteContext } from "../../context/favoriteContext";

interface ListConfigsProps {
	name: string;
	tags: string[];
	listConfigs: boolean;
	setListConfigs: React.Dispatch<React.SetStateAction<boolean>>;
	confirmDeleteList: boolean;
	setConfirmDeleteList(newState: boolean): void;
}

export const ListConfigs = (props: ListConfigsProps) => {
	const { name, tags, listConfigs, setListConfigs, confirmDeleteList, setConfirmDeleteList } = props;
	const { DBdeleteTag, DBmodifyList, DBmodifyTag } = useContext(ListContext);
	const { favoritesData, DBmodifyFavorite } = useContext(favoriteContext);
	const [configValues, setConfigValues] = useState({
		listName: name,
		tags: tags,
	});

	const deleteTag = (e: React.SyntheticEvent, tagName: string) => {
		const button = e.target as HTMLButtonElement;
		const input = button.previousSibling as HTMLInputElement;

		if (tagName === "Todos") return inputError(input, "Todos é uma tag reservada.");

		Cache_deleteTag(name, tagName);

		DBdeleteTag({
			variables: {
				listName: name,
				tagName: tagName,
			},
		});
	};

	const renameList = (newName: string) => {
		setConfigValues(
			produce(configValues, (draft) => {
				draft.listName = newName.trim() || name;
			})
		);
	};

	const renameTags = (newName: string, index: number, input: HTMLInputElement) => {
		if (!index) return inputError(input, "Todos não pode ser renomeado", "Todos");

		setConfigValues(
			produce(configValues, (draft) => {
				draft.tags[index] = newName.trim() || tags[index];
			})
		);
	};

	const saveListAndTags = () => {
		Cache_modifyList(name, configValues.listName);
		DBmodifyList({
			variables: {
				name: name,
				newName: configValues.listName,
			},
		});

		tags.forEach((tag, index) => {
			if (tag === "Todos") return;

			Cache_modifyTag(name, tag, configValues.tags[index]);
			DBmodifyTag({
				variables: {
					listName: configValues.listName,
					tagName: tag,
					newTagName: configValues.tags[index],
				},
			});
		});

		updateFavorites();
	};

	const updateFavorites = () => {
		favoritesData.forEach((favorite) => {
			if (favorite.list === name) {
				const { name, note, imgURL, genre, tags: favoriteTags } = favorite;

				const tagsThatChange = tags.map((tag, index) => {
					const newTagName = configValues.tags[index];
					const oldTagName = tag;

					if (newTagName.toUpperCase() != oldTagName.toUpperCase()) return [oldTagName, newTagName];
				});

				const newTags = favoriteTags.map((favoriteTag) => {
					const indexTagChanged = tagsThatChange.findIndex((tags) => {
						if (!tags) return;

						const oldTagName = tags[0].toUpperCase();
						if (oldTagName === favoriteTag.toUpperCase()) return tags;
					});

					if (indexTagChanged > 0) return tagsThatChange[indexTagChanged][1];

					return favoriteTag;
				});

				const newFavorite = {
					list: configValues.listName,
					tags: newTags,
					name,
					note,
					imgURL,
					genre,
				};

				Cache_modifyFavorite(favorite.name, newFavorite);
				DBmodifyFavorite({ variables: { name, newFavorite } });
			}
		});
	};

	return (
		<ListConfigsStyle>
			<div className="top">
				<h1>{name}</h1>
				<button onClick={() => setListConfigs(!listConfigs)}>X</button>
			</div>

			<div className="list">
				<input type="text" placeholder={name} onChange={(e) => renameList(e.target.value)} />
				<button onClick={() => setConfirmDeleteList(!confirmDeleteList)}>
					<BiTrashAlt className="icon delete" title="Deletar lista" />
				</button>
			</div>

			<div className="tag-option">
				<h2>Tags</h2>
				{tags.map((tag, index) => (
					<div className="tag" key={tag + index}>
						<MdDragIndicator className="icon" title="Mover Tag" />
						<input type="text" placeholder={tag} onChange={(e) => renameTags(e.target.value, index, e.target)} />
						<button onClick={(e) => deleteTag(e, tag)}>
							<BiTrashAlt className="icon delete" title="Deletar Tag" />
						</button>
					</div>
				))}
			</div>

			<button className="save" onClick={() => saveListAndTags()}>
				Salvar
			</button>
		</ListConfigsStyle>
	);
};
