import { ListStyle } from "../../styles/sidebar/listStyle";
import { Tags } from "./Tags";
import { BsThreeDotsVertical } from "react-icons/Bs";
import { useState } from "react";
import { ListConfigs } from "./listConfigs";

interface TagContainerProps {
	name: string;
	tags: string[];
}

const Lists = ({ name, tags }: TagContainerProps) => {
	const TagsJSXArray = tags.map((tag) => <Tags key={tag} tag={tag} title={name} />);
	const [listConfigs, setListConfigs] = useState(false);

	return (
		<ListStyle>
			<div className="title">
				<h1>{name}</h1>

				<button className="menu" onClick={() => setListConfigs(!listConfigs)}>
					<BsThreeDotsVertical className="icon" />
				</button>

				{listConfigs && (
					<ListConfigs
						name={name}
						tags={tags}
						listConfigs={listConfigs}
						setListConfigs={setListConfigs}
					/>
				)}
			</div>

			<div className="tags">{TagsJSXArray}</div>
		</ListStyle>
	);
};

export { Lists };
