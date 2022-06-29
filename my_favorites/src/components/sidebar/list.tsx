import { ListStyle } from "../../styles/sidebar/listStyle";
import { Tags } from "./Tags";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import { ListConfigs } from "./listConfigs";
import { DeleteListConfirmation } from "./deleteListConfirmation";

interface TagContainerProps {
	name: string;
	tags: string[];
}

const Lists = ({ name, tags }: TagContainerProps) => {
	const TagsJSXArray = tags.map((tag) => <Tags key={tag} tag={tag} title={name} />);
	const [listConfigs, setListConfigs] = useState(false);

	const [confirmDeleteList, setConfirmDeleteList] = useState(false);

	return (
		<ListStyle>
			<div className="title">
				<h1>{name}</h1>

				<button className="menu" onClick={() => setListConfigs(!listConfigs)}>
					<BiMenuAltRight className="icon" />
				</button>

				{listConfigs && (
					<ListConfigs
						name={name}
						tags={tags}
						listConfigs={listConfigs}
						setListConfigs={setListConfigs}
						confirmDeleteList={confirmDeleteList}
						setConfirmDeleteList={setConfirmDeleteList}
					/>
				)}
			</div>

			<div className="tags">{TagsJSXArray}</div>

			{confirmDeleteList && (
				<DeleteListConfirmation
					listName={name}
					setConfirmDeleteList={setConfirmDeleteList}
					setListConfigs={setListConfigs}
				/>
			)}
		</ListStyle>
	);
};

export { Lists };
