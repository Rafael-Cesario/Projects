import { Icon } from "./components/icon";
import { SearchBar } from "./components/searchBar";
import { StyledHeader } from "./styles/styledHeader";

export const Header = () => {
	return (
		<StyledHeader>
			<div className="sidebar-title">
				<Icon src="/icons/sidebar.png" alt="sidebar icon" />
				<h1 className="title">E-Commerce</h1>
			</div>

			<div className="right-menus">
				<div className="top">
					<SearchBar />
				</div>

				<div className="bottom"></div>
			</div>
		</StyledHeader>
	);
};
