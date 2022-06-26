import { useContext } from "react";
import { FavoriteContextProvider } from "../../context/favoriteContext";
import { formFildsContext } from "../../context/formFildsContext";
import { NewFavoriteStyle } from "../../styles/newFavorite/newFavoriteStyle";
import { FormFilds } from "./formFilds";
import { Preview } from "./preview";
import { Tags } from "./tags";
import { TopMenu } from "./topMenu";

interface NewFavoriteProps {
	title: string;
	isDisplayActive: boolean;
	changeDisplay: React.Dispatch<React.SetStateAction<boolean>>;
	isChanging?: boolean;
}

export const NewFavorite = (props: NewFavoriteProps) => {
	const { title, isDisplayActive, changeDisplay, isChanging } = props;
	const { fildsValue } = useContext(formFildsContext);

	return (
		<NewFavoriteStyle>
			<FavoriteContextProvider>
				<TopMenu
					title={title}
					isDisplayActive={isDisplayActive}
					changeDisplay={changeDisplay}
					isChanging={isChanging}
					fildsValue={fildsValue}
				/>
				<div className="user-inputs">
					<FormFilds fildsValue={fildsValue} isChanging={isChanging} />
					<Preview fildsValue={fildsValue} />
					<Tags fildsValue={fildsValue} />
				</div>
			</FavoriteContextProvider>
		</NewFavoriteStyle>
	);
};
