/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, ReactNode, useState } from "react";

interface TagContextProps {
	children: ReactNode;
}

interface Tags {
	active: string[];
	setActive: React.Dispatch<React.SetStateAction<string[]>>;
	showCreateNew: boolean;
	setShowCreateNew: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValue = {
	active: ["Jogos", "Todos"],
	setActive: () => {},
	showCreateNew: false,
	setShowCreateNew: () => {},
};

const TagContext = createContext<Tags>(initialValue);

const TagContextProvider = ({ children }: TagContextProps) => {
	const [active, setActive] = useState(initialValue.active);
	const [showCreateNew, setShowCreateNew] = useState(initialValue.showCreateNew);

	return (
		<TagContext.Provider
			value={{
				active,
				setActive,
				showCreateNew,
				setShowCreateNew,
			}}
		>
			{children}
		</TagContext.Provider>
	);
};

export { TagContextProvider, TagContext };
