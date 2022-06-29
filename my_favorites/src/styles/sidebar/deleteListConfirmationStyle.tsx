import styled from "styled-components";
import { colors } from "../globalStyle";

export const DeleteListConfirmationStyle = styled.div`
	position: absolute;
	z-index: 2;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 10rem;
	background-color: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(5px);

	display: flex;
	justify-content: center;

	.container {
		padding: 3rem;
		border-radius: 5px;
		background-color: ${colors.black};
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		max-width: 1000px;
		height: fit-content;
	}

	.top {
		display: flex;
		justify-content: space-between;
		margin-bottom: 2rem;

		h1 {
			color: ${colors.fontBlue};
		}

		button {
			background-color: transparent;
			color: ${colors.fontBlue};
			font-size: 1rem;
		}
	}

	p {
		margin-bottom: 2rem;
	}

	.confirm {
		display: flex;
		justify-content: space-between;

		button {
			border: none;
			padding: 5px 10px;
			background-color: ${colors.fontBlue};
			color: white;
		}

		.delete {
			background-color: crimson;
			color: white;
		}
	}
`;
