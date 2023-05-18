import { StyledSearchBar } from "../styles/styledSearchBar";
import { Icon } from "./icon";

export const SearchBar = () => {
	return (
		<StyledSearchBar>
			<input type="text" placeholder="Busque por um produto..." />
			<Icon src="/icons/search.png" alt="search icon" />
		</StyledSearchBar>
	);
};
