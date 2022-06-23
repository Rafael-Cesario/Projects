import styled from "styled-components";
import { colors } from "../globalStyle";

export const PreviewStyled = styled.div`
	display: flex;
	flex-wrap: wrap;

	flex-direction: column;
	transform: translateY(20px);

	.image {
		width: 10rem;
		height: 14rem;
		background-color: ${colors.background};
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 2px 2px 2px #10101036;
		margin-bottom: 10px;

		.icon {
			font-size: 4rem;
			opacity: 0.1;
		}

		img {
			border-radius: 5px;
			width: 100%;
			height: 100%;
			object-fit: fill;
			transition: 0.3s;
		}
	}

	span {
		font-family: "Courier New", Courier, monospace;
		opacity: 0.8;
		font-size: 0.8rem;
		margin-bottom: 2px;
	}
`;
