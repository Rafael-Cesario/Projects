import styled from "styled-components";

import { colors } from "./Notebook.style";

const SearchBarStyle = styled.div`
	display: flex;
	justify-content: center;

	input {
		color: white;
		background-color: transparent;
		border: 1px solid white;
		outline: none;

		padding: 15px;
		border-radius: 5px;
		margin: 2em;
		width: 20%;

		&:focus {
			border: 1px solid ${colors.BlueOne};
		}
	}
`;

export { SearchBarStyle };
