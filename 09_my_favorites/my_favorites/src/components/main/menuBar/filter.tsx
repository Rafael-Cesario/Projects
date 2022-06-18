import React, { useState } from "react";

// FaRegBookmark, AiFillFilter
import { AiFillFilter } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";
import { FilterStyle } from "../../../styles/main/menuBar/filterStyle";
import { Options } from "./filterOptions";

export type FilterOptions = "" | "genre" | "tags" | "note";

export const Filter = () => {
	const [showFiltersMenu, setShowFiltersMenu] = useState(false);
	const [filterOption, setFilterOption] = useState<FilterOptions>("");

	const changeFilterOption = (e: React.SyntheticEvent) => {
		const target = e.target as HTMLButtonElement;
		const option = target.name as FilterOptions;

		setFilterOption(option);
	};

	return (
		<FilterStyle className="filter">
			<button onClick={() => setShowFiltersMenu(!showFiltersMenu)}>
				<span className="icon">
					<AiFillFilter />
				</span>
				<span className="txt">Filtro</span>
			</button>

			{showFiltersMenu && (
				<div className="filter-container">
					<div className="filter-menu">
						<button name="genre" onClick={(e) => changeFilterOption(e)}>
							<span>Genero</span>
							<TiArrowSortedDown className="icon" color="white" />
						</button>

						<button name="tags" onClick={(e) => changeFilterOption(e)}>
							<span>Tags</span>
							<TiArrowSortedDown className="icon" color="white" />
						</button>

						<button name="note" onClick={(e) => changeFilterOption(e)}>
							<span>Nota</span>
							<TiArrowSortedDown className="icon" color="white" />
						</button>
					</div>

					{filterOption && <Options filterOption={filterOption} />}
				</div>
			)}
		</FilterStyle>
	);
};
