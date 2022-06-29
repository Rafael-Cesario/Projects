import { useContext } from "react";
import { BiTrashAlt } from "react-icons/bi";
import { MdDragIndicator } from "react-icons/md";
import { ListContext } from "../../context/listContext";
import { ListConfigsStyle } from "../../styles/sidebar/listConfigsStyle";
import { Cache_deleteTag } from "../../utils/dataBase/cache/tags";
import { inputError } from "../../utils/func/inputError";

interface ListConfigsProps {
	name: string;
	tags: string[];
	listConfigs: boolean;
	setListConfigs: React.Dispatch<React.SetStateAction<boolean>>;

	confirmDeleteList: boolean;
	setConfirmDeleteList(newState: boolean): void;
}

export const ListConfigs = ({
	name,
	tags,
	listConfigs,
	setListConfigs,
	confirmDeleteList,
	setConfirmDeleteList,
}: ListConfigsProps) => {
	const { DBdeleteTag } = useContext(ListContext);

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

	return (
		<ListConfigsStyle>
			<div className="top">
				<h1>{name}</h1>
				<button onClick={() => setListConfigs(!listConfigs)}>X</button>
			</div>

			<div className="list">
				<input type="text" placeholder={name} />
				<button onClick={() => setConfirmDeleteList(!confirmDeleteList)}>
					<BiTrashAlt className="icon delete" title="Deletar lista" />
				</button>
			</div>

			<div className="tag-option">
				<h2>Tags</h2>
				{tags.map((tag, index) => (
					<div className="tag" key={tag + index}>
						<MdDragIndicator className="icon" title="Mover Tag" />
						<input type="text" placeholder={tag} />
						<button onClick={(e) => deleteTag(e, tag)}>
							<BiTrashAlt className="icon delete" title="Deletar Tag" />
						</button>
					</div>
				))}
			</div>

			<button className="save">Salvar</button>
		</ListConfigsStyle>
	);
};
