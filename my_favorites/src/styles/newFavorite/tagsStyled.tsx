import styled from "styled-components";

import { colors } from "../globalStyle";

export const TagsStyled = styled.div`
	width: 100%;
	background-color: ${colors.background};
	border-radius: 5px;
	margin: 10px 0;
	padding: 5px;
	overflow: hidden;

	display: flex;
	justify-content: left;
	flex-wrap: wrap;
	grid-area: auto / auto / auto / span 2;

	.tag {
		width: fit-content;
		border-radius: 3px;
		cursor: pointer;
		margin: 5px;
		display: flex;
		align-items: center;
		background-color: ${colors.fontBlue};
		padding: 0 5px;
		justify-content: space-between;
		color: white;
		flex-grow: 1;

		span {
			text-transform: capitalize;
			font-family: "Roboto", "Courier New", Courier, monospace;
			font-weight: lighter;
			opacity: 1;
		}

		i {
			margin: 0 3px;
			font-size: 0.7rem;
		}
	}
`;
