import styled from "styled-components";

import { colors } from "../Notebook.style";

const SidebarStyle = styled.div`
	font-family: "Oswald";
	padding: 1.5rem;
	width: 10rem;

	background-color: #181818;

	.buttons {
		display: flex;
		justify-content: space-between;

		a {
			color: white;
			text-decoration: none;

			&:hover {
				color: ${colors.BlueOne};
			}
		}

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

	h2 {
		margin-top: 1.5rem;
		font-size: 1.2rem;
		font-weight: 500;
	}

	p {
		font-weight: 300;
		cursor: pointer;
		color: #dadada;

		&:hover {
			color: ${colors.BlueOne};
		}
	}
`;

export { SidebarStyle };
