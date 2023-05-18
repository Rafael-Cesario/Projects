import { styled } from "styled-components";

export const StyledSearchBar = styled.div`
	display: flex;
	align-items: center;
	background-color: #303030;
	border-radius: 4px;

	input {
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
		width: 15px;
		height: 15px;
		margin: 0 0.5rem;
	}
`;
