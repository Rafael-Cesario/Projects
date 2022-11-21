import { FormFildsContextProvider } from "../../context/formFildsContext";
import { MainStyle } from "../../styles/main/mainStyle";
import { Favorites } from "./favorites";
import { MenuBar } from "./menuBar/menuBar";

const Main = () => {
	return (
		<MainStyle>
			<MenuBar />
			<FormFildsContextProvider>
				<Favorites />
			</FormFildsContextProvider>
		</MainStyle>
	);
};

export { Main };
