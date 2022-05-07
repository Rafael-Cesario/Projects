import styled from "styled-components";

import { colors } from "../Notebook.style";

const ConfigsStyle = styled.div`
	position: absolute;
	top: 20%;
	left: 50%;
	transform: translate(-50%, 0);

	font-family: "Oswald";
	background-color: #f0f0f0;
	box-shadow: 10px 10px 5px #00000089;
	color: black;
	width: 100%;
	max-width: 60rem;
	padding: 50px;
	border-radius: 5px;

	h1 {
		margin-bottom: 1rem;
	}

	.configs {
		margin-bottom: 2rem;
		.config {
			display: flex;
			flex-direction: row;

			p {
				margin-right: 1rem;
				font-weight: 500;
			}

			input {
				font-family: "Oswald";
				background-color: transparent;
				border: none;
				outline: none;
				font-weight: 500;
				::placeholder {
					font-weight: 500;
					color: #000;
				}
			}
		}
	}

	.buttons {
		display: flex;
		justify-content: space-between;

		button {
			font-family: "Oswald";
			background-color: transparent;
			outline: none;
			border: none;
			font-size: 1rem;
			cursor: pointer;

			&:hover {
				color: ${colors.BlueOne};
			}
		}
	}
`;

export { ConfigsStyle };
