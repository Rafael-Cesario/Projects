import { useContext } from "react";
import { FavoriteContextProvider } from "../../context/favoriteContext";
import { formFildsContext } from "../../context/formFildsContext";
import { NewFavoriteStyle } from "../../styles/newFavorite/newFavoriteStyle";
import { FavoriteType } from "../../utils/types/favorite";
import { FormFilds } from "./formFilds";
import { Preview } from "./preview";
import { Tags } from "./tags";
import { TopMenu } from "./topMenu";

interface NewFavoriteProps {
	details?: FavoriteType;
	title: string;
	isDisplayActive: boolean;
	changeDisplay: React.Dispatch<React.SetStateAction<boolean>>;
	deleteButton?: boolean;
}

export const NewFavorite = (props: NewFavoriteProps) => {
	const { title, isDisplayActive, changeDisplay, deleteButton } = props;
	const { fildsValue, setFildsValue } = useContext(formFildsContext);

	return (
		<NewFavoriteStyle>
			<FavoriteContextProvider>
				<TopMenu
					title={title}
					isDisplayActive={isDisplayActive}
					changeDisplay={changeDisplay}
					deleteButton={deleteButton}
				/>
				<div className="user-inputs">
					<FormFilds setFildsValue={setFildsValue} fildsValue={fildsValue} />
					<Preview fildsValue={fildsValue} />
					<Tags fildsValue={fildsValue} setFildsValue={setFildsValue} />
				</div>
			</FavoriteContextProvider>
		</NewFavoriteStyle>
	);
};
