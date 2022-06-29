import styled from "styled-components";

import { colors } from "../globalStyle";

export const FormFildsStyle = styled.div`
	.fild {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		margin-bottom: 30px;
		width: 100%;

		span {
			color: white;
			font-family: "Roboto", "Courier New", Courier, monospace;
			font-weight: normal;
			font-size: 0.9rem;
			margin-bottom: 5px;
		}

		input,
		select {
			border: 2px solid transparent;
			border-radius: 5px;
			outline: none;
			padding: 10px 20px;
			width: 100%;
			color: white;
			background-color: ${colors.background};

			:focus {
				border: 2px solid ${colors.fontBlue};
			}
		}
	}

	.error {
		background-color: crimson !important;
		color: black !important;
	}
`;
