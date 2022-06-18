import React, { useEffect, useState } from "react";

import produce from "immer";
import { FilterOptions } from "./filter";
import { favoriteData } from "../../../utils/favoriteData";

type Filters = {
	genre: string[];
	tags: string[];
	note: string[];
};

interface OptionsProps {
	filterOption: FilterOptions;
}

export const Options = ({ filterOption }: OptionsProps) => {
	const [filters, setFilters] = useState<Filters>({ genre: [], tags: [], note: [] });

	const generateOptions = (option: string) => {
		const options = favoriteData
			.map((favorite) => favorite[option])
			.filter((option) => option != "")
			.flat();

		return options;
	};

	const giveButtonClass = () => {
		const filterOptionsDiv = document.querySelector(".filter-options") as HTMLDivElement;
		const buttons = filterOptionsDiv.childNodes as NodeListOf<HTMLButtonElement>;
		const allFilters = [...filters.genre, ...filters.note, ...filters.tags];

		buttons.forEach((button) => {
			if (allFilters.includes(button.textContent)) button.classList.add("active");
		});
	};

	useEffect(() => giveButtonClass());

	useEffect(() => {
		const favorites = document.querySelectorAll(".favorite") as NodeListOf<HTMLDivElement>;

		const activeFilters = filters.genre.length + filters.note.length + filters.tags.length;

		if (activeFilters === 0) {
			favorites.forEach((favorite) => (favorite.style.display = "flex"));
			return;
		}

		favorites.forEach((favorite) => {
			const options = favorite.getAttribute(`data-${filterOption}`).split(",");

			options.forEach((option) => {
				const hasFilter = filters[filterOption].includes(option);
				if (hasFilter) favorite.style.display = "flex";
			});
		});
	}, [filters]);

	const activeFilter = (e: React.SyntheticEvent) => {
		const favorites = document.querySelectorAll(".favorite") as NodeListOf<HTMLDivElement>;

		const target = e.target as HTMLButtonElement;
		const filterText = target.textContent;
		const filterName = target.name;

		favorites.forEach((favorite) => (favorite.style.display = "none"));
		target.classList.toggle("active");

		setFilters(
			produce(filters, (draft) => {
				const hasFilter = draft[filterName].indexOf(filterText);

				if (hasFilter > -1) {
					draft[filterName].splice(hasFilter, 1);
					return;
				}

				draft[filterName].push(filterText);
			})
		);
	};

	const options = {
		genre: generateOptions("genre"),
		tags: generateOptions("tags"),
		note: ["Incrivel", "Bom", "Normal", "Ruim", "Sem Nota"],
	};

	return (
		<div className="filter-options">
			{options[filterOption].map((option: string, index: number) => (
				<button key={option + index} name={filterOption} onClick={(e) => activeFilter(e)}>
					{option}
				</button>
			))}
		</div>
	);
};
