import type { ListType } from "../../utils/types/list";

import { useContext, useEffect, useState } from "react";
import { ListContext } from "../../context/listContext";
import { SidebarStyle } from "../../styles/sidebar/sidebarStyle";
import { NewFavorite } from "../newFavorite/newFavorite";
import { Lists } from "./list";
import { FormFildsContextProvider } from "../../context/formFildsContext";
import { displayContext } from "../../context/displayContext";

const Sidebar = () => {
	const [showCreateNew, setShowCreateNew] = useState(false);
	const { setActiveTag } = useContext(displayContext);
	const { listsData } = useContext(ListContext);

	useEffect(() => {
		if (listsData?.length > 0) {
			const firstListName = listsData[0]?.name;
			setActiveTag({ listName: firstListName, tagName: "Todos" });
		}
	}, [listsData]);

	const listNames = listsData?.map((list: ListType) => list.name);
	const listTags = listsData?.map((list: ListType) => list.tags);

	const listsJSXArray = listNames?.map((name, index) => <Lists key={name} name={name} tags={[...listTags[index]]} />);

	return (
		<SidebarStyle>
			<button className="new-favorite" onClick={() => setShowCreateNew(!showCreateNew)}>
				<span className="icon">+</span>
				<span className="txt">Novo</span>
			</button>

			{listsJSXArray}

			<FormFildsContextProvider>
				{showCreateNew && <NewFavorite title="Novo Favorito" changeDisplay={setShowCreateNew} isDisplayActive={showCreateNew} />}
			</FormFildsContextProvider>
		</SidebarStyle>
	);
};

export { Sidebar };
