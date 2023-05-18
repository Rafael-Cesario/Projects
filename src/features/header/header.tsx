import { Icon } from "./components/icon";
import { SearchBar } from "./components/searchBar";
import { UserIcons } from "./components/userIcons";
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
					<UserIcons />
				</div>

				<div className="bottom"></div>
			</div>
		</StyledHeader>
	);
};
