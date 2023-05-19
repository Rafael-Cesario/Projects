import { styled } from "styled-components";
import { Theme } from "../../../styles/styledGlobal";

export const StyledUserIcons = styled.div`
	background-color: ${Theme.container};
	padding: 0.4rem 1rem;
	border-radius: 4px;
	display: flex;

	.button {
		border: none;
		outline: none;
		background-color: transparent;
		margin: 0 0.5rem;
		position: relative;

		.info {
			visibility: hidden;
			position: absolute;
			left: 0;
			background-color: #0050dd;
			color: #ddd;
			font-weight: bold;
			transform: translate(-50%, 2.5rem);
			padding: 5px 20px;
			border-radius: 4px;
		}

		&:hover .info {
			visibility: visible;
		}
	}
`;
