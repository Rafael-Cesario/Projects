import styled from "styled-components";
import { colors } from "../globalStyle";

export const MenuBarStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	align-items: flex-start;

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

		.icon {
			background-color: ${colors.fontBlue};
			transform: translateX(30px);
			pointer-events: none;
		}

		input {
			border: none;
			outline: none;
			background-color: ${colors.fontBlue};
			font-size: 0.5rem;
			padding: 10px 20px 10px 40px;
			border-radius: 5px;
			color: white;
			transition: 0.3s ease-in-out;

			:focus {
				font-size: 1.5rem;
			}
		}
	}
`;
