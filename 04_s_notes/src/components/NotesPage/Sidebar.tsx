import React from "react";
import { Link } from "react-router-dom";

import { SidebarStyle } from "../../styles/NotesPage/sidebarstyle";

interface NBprops {
	NB: {
		name: string;
		id: number;
	};
	configs: boolean;
	setConfigs: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<NBprops> = ({ NB, setConfigs, configs }) => {
	const showConfigs = () => {
		setConfigs(!configs);
	};

	return (
		<SidebarStyle>
			<div className="buttons">
				<Link to={"/"}>Voltar</Link>
				<button onClick={showConfigs}>Configs</button>
			</div>
		</SidebarStyle>
	);
};

export { Sidebar };
