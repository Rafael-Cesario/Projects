import { MainStyle } from "../../styles/main/mainStyle";
import { Favorites } from "./favorites";
import { MenuBar } from "./menuBar/menuBar";

const Main = () => {
	return (
		<MainStyle>
			<MenuBar />
			<Favorites />
		</MainStyle>
	);
};

export { Main };
