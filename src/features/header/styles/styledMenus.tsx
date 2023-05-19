import { styled } from "styled-components";
import { Theme } from "../../../styles/styledGlobal";

export const StyledMenus = styled.div`
	margin: 1rem 0;

	button {
		border: none;
		outline: none;
		background-color: transparent;
		color: #ddd;
		font-weight: bold;
		padding: 5px 20px;
		border-radius: 4px;
		cursor: pointer;

		&:hover {
			background-color: ${Theme.container};
		}
	}
`;
