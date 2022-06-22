/* eslint-disable @typescript-eslint/no-empty-function */

import { createContext, ReactNode, useState } from "react";
import { FavoriteType } from "../utils/types/favorite";

interface formFildProps {
	children: ReactNode;
}

interface FormFildsInterface {
	fildsValue: FavoriteType;
	setFildsValue: React.Dispatch<React.SetStateAction<FavoriteType>>;
}

const initialValue: FormFildsInterface = {
	fildsValue: {
		list: "",
		name: "",
		note: "Sem Nota",
		genre: ["Sem Genero"],
		imgURL: "",
		tags: ["Sem Tags"],
	},
	setFildsValue: () => {},
};

const formFildsContext = createContext(initialValue);

const FormFildsContextProvider = ({ children }: formFildProps) => {
	const [fildsValue, setFildsValue] = useState(initialValue.fildsValue);

	return (
		<formFildsContext.Provider value={{ fildsValue, setFildsValue }}>
			{children}
		</formFildsContext.Provider>
	);
};

export { formFildsContext, FormFildsContextProvider };
