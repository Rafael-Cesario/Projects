import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { openSidebar } from "../../shared/animations";

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

	const closeSidebar = () => {
		openSidebar(true);
	};

	return (
		<SidebarStyle className="sidebar">
			<div className="buttons">
				<Link to={"/"}>Voltar</Link>
				<button onClick={showConfigs}>Configs</button>

				<button className="close-side-bar" onClick={(e) => openSidebar(true)}>
					<GiHamburgerMenu className="icon" />
				</button>
			</div>

			<h2>{NB.name}</h2>
			<p>Seção</p>
		</SidebarStyle>
	);
};

export { Sidebar };
