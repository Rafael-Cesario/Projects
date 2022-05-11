import styled from "styled-components";

import { colors } from "../Notebook.style";

const SidebarStyle = styled.div`
	position: absolute;
	top: 0;
	left: -30rem;
	background-color: ${colors.BlackTwo};
	box-shadow: 2px 2px 2px #00000045;

	font-family: "Oswald";
	padding: 1.5rem;
	width: 20rem;
	min-height: 100vh;

	.buttons {
		display: flex;
		justify-content: space-between;
		align-items: center;

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

		.icon {
			font-size: 2rem;
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
		text-transform: capitalize;

		&:hover {
			color: ${colors.BlueOne};
		}
	}

	.all-pages {
		margin: 1rem 0;
	}
`;

export { SidebarStyle };
