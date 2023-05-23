import { styled } from "styled-components";

export const StyledIcon = styled.img`
	cursor: pointer;
	transition: 0.2s;

	&:hover {
		transform: scale(1.1);
	}

	&:active {
		transform: scale(1);
	}
`;
