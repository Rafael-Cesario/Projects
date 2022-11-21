/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useState } from "react";

interface ProviderContext {
	children: ReactNode;
}

type Filters = {
	genre: string[];
	tags: string[];
	note: string[];
};

type displayContextType = {
	activeTag: { listName: string; tagName: string };
	setActiveTag: React.Dispatch<React.SetStateAction<{ listName: string; tagName: string }>>;
	filters: Filters;
	setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

const initialValue = {
	activeTag: { listName: "", tagName: "" },
	setActiveTag: () => {},
	filters: { genre: [], tags: [], note: [] },
	setFilters: () => {},
};

const displayContext = createContext<displayContextType>(initialValue);

const DisplayContextProvider = ({ children }: ProviderContext) => {
	const [activeTag, setActiveTag] = useState(initialValue.activeTag);
	const [filters, setFilters] = useState(initialValue.filters);

	return (
		<displayContext.Provider
			value={{
				activeTag,
				setActiveTag,
				filters,
				setFilters,
			}}
		>
			{children}
		</displayContext.Provider>
	);
};

export { displayContext, DisplayContextProvider };
