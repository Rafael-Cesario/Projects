import styled from "styled-components";
import { colors } from "../globalStyle";

export const MenuBarStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	align-items: flex-center;

	.tag {
		justify-self: start;
		display: flex;
		align-items: center;

		.tagName {
			border: none;
			outline: none;
			background-color: transparent;
			font-size: 1rem;
			font-family: "Roboto", "Courier New", Courier, monospace;
			margin-left: 5px;
			color: white;

			::placeholder {
				color: white;
			}
		}
	}

	.filter {
		justify-self: center;

		button {
			background: ${colors.black};
		}
	}

	.search {
		justify-self: end;
		display: flex;
		align-items: center;
		background-color: ${colors.fontBlue};
		padding-left: 10px;
		border-radius: 5px;

		.icon {
			pointer-events: none;
		}

		input {
			border: none;
			background-color: ${colors.fontBlue};
			outline: none;
			font-size: 0.5rem;
			padding: 10px 20px 10px 10px;
			color: white;
			transition: 0.3s ease-in-out;

			:focus {
				font-size: 1.5rem;
			}
		}
	}
`;
