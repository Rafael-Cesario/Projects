import styled from "styled-components";

import { colors } from "../Notebook.style";

const ConfigsStyle = styled.div`
	position: absolute;
	top: 20%;
	left: 50%;
	transform: translate(-50%, -50%);

	font-family: "Oswald";
	background-color: ${colors.BlackTwo};
	width: 30rem;
	padding: 10px;
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
				font-weight: 300;
				color: #dadada;
				margin-right: 1rem;
			}

			input {
				font-family: "Oswald";
				background-color: transparent;
				border: none;
				outline: none;
				color: white;
				font-weight: 300;
				::placeholder {
					color: white;
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
			color: white;
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
