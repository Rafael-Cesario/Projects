import styled from "styled-components";
import { colors } from "../globalStyle";

export const TopMenuStyle = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;

	h2 {
		color: ${colors.fontBlue};
		text-transform: capitalize;
	}

	.buttons {
		display: flex;

		button {
			background-color: ${colors.fontBlue};
			color: white;
			padding: 10px 20px;
			margin: 10px;
		}

		.confirmButton {
			position: absolute;
			transform: translate(70px, 50px);
			background-color: crimson;
			color: white;
			padding: 10px 20px;
		}
	}
`;
