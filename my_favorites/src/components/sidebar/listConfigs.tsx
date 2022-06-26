import { BiTrashAlt } from "react-icons/bi";
import { MdDragIndicator } from "react-icons/md";

interface ListConfigsProps {
	name: string;
	tags: string[];
	listConfigs: boolean;
	setListConfigs: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ListConfigs = ({ name, tags, listConfigs, setListConfigs }: ListConfigsProps) => {
	return (
		<div className="options">
			<div className="top">
				<h1>{name}</h1>
				<button onClick={() => setListConfigs(!listConfigs)}>X</button>
			</div>

			<div className="list">
				<input type="text" placeholder={name} />
				<button>
					<BiTrashAlt className="icon delete" title="Deletar lista" />
				</button>
			</div>

			<div className="tag-option">
				<h2>Tags</h2>
				{tags.map((tag, index) => (
					<div className="tag" key={tag + index}>
						<MdDragIndicator className="icon" title="Mover Tag" />
						<input type="text" placeholder={tag} />
						<BiTrashAlt className="icon delete" title="Deletar Tag" />
					</div>
				))}
			</div>

			<button className="save">Salvar</button>
		</div>
	);
};
