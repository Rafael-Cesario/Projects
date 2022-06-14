/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, ReactNode, useState } from "react";

interface TagContextProps {
	children: ReactNode;
}

interface Tags {
	active: string[];
	setActive: React.Dispatch<React.SetStateAction<string[]>>;
}

const initialValue = {
	title: "",
	tags: [],
	active: ["Jogos", "Todos"],
	setActive: () => {},
};

const TagContext = createContext<Tags>(initialValue);

const TagContextProvider = ({ children }: TagContextProps) => {
	const [active, setActive] = useState(initialValue.active);

	return (
		<TagContext.Provider
			value={{
				active,
				setActive,
			}}
		>
			{children}
		</TagContext.Provider>
	);
};

export { TagContextProvider, TagContext };
