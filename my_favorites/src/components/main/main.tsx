import { FavoriteContextProvider } from "../../context/favoriteContext";
import { FormFildsContextProvider } from "../../context/formFildsContext";
import { MainStyle } from "../../styles/main/mainStyle";
import { Favorites } from "./favorites";
import { MenuBar } from "./menuBar/menuBar";

const Main = () => {
	return (
		<MainStyle>
			<FavoriteContextProvider>
				<MenuBar />
				<FormFildsContextProvider>
					<Favorites />
				</FormFildsContextProvider>
			</FavoriteContextProvider>
		</MainStyle>
	);
};

export { Main };
