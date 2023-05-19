import { styled } from "styled-components";
import { Theme } from "../../../styles/styledGlobal";

export const StyledSearchBar = styled.div`
	display: flex;
	align-items: center;
	background-color: ${Theme.container};
	border-radius: 4px;
	margin-right: 1rem;
	width: 100%;

	input {
		width: inherit;
		outline: none;
		border: none;
		background-color: transparent;
		padding: 0.4rem 1rem;
		margin-right: 1rem;
		font-weight: bold;
		color: #ddd;

		&::placeholder {
			color: #aaa;
		}
	}

	.icon {
		margin: 0 0.5rem;
	}
`;
