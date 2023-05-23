import { StyledUserIcons } from "../styles/styledUserIcons";
import { Icon } from "./icon";

export const UserIcons = () => {
	return (
		<StyledUserIcons>
			<button className="button">
				<Icon src="/icons/User.png" alt="user icon" />
				<span className="info">Perfil</span>
			</button>

			<button className="button">
				<Icon src="/icons/Heart.png" alt="heart icon" />
				<span className="info">Favoritos</span>
			</button>

			<button className="button">
				<Icon src="/icons/cart.png" alt="cart icon" />
				<span className="info">Carrinho</span>
			</button>
		</StyledUserIcons>
	);
};
