import styled from "styled-components";

import { colors } from "../../globalStyle";

export const SearchStyle = styled.div`
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
`;
