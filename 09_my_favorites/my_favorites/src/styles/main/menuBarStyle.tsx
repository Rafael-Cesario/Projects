import styled from "styled-components";
import { colors } from "../globalStyle";

export const MenuBarStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
		padding: 2px 2px 2px 10px;
		border-radius: 5px;

		.icon {
			pointer-events: none;
			margin-right: 5px;
		}

		input {
			border-radius: 5px;
			border: none;
			background-color: ${colors.fontBlue};
			outline: none;
			font-size: 0.5rem;
			padding: 10px 20px 10px 10px;
			color: white;
			transition: 0.3s ease-in-out;

			:focus {
				width: 100%;
				font-size: 1.5rem;
			}
		}
	}

	@media (max-width: 800px) {
		.tag,
		.filter,
		.search {
			justify-self: start;
			margin: 10px 0;
		}
	}
`;
