import { styled } from "styled-components";
import { Theme } from "../../../styles/styledGlobal";

export const StyledPublicity = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	button {
		border: none;
		outline: none;
		background-color: ${Theme.container};
		width: fit-content;
		height: fit-content;
		padding: 5px 10px;
		color: #ddd;
		border-radius: 4px;
		font-weight: bold;
		cursor: pointer;

		&:hover {
			transform: scale(1.1);
		}

		&:active {
			transform: scale(1);
		}
	}

	.carousel {
		display: flex;
		margin: 2rem 1rem;
		width: 80vw;
		height: 20rem;
		overflow-y: hidden;
		overflow-x: hidden;
		border-radius: 4px;
		position: relative;
		overflow: hidden;
		border: 5px solid #303030;

		.wrapper {
			transition: 0.3s;
		}

		.advertising {
			object-fit: cover;
			width: 80vw;
			height: 100%;
		}
	}

	.slides {
		position: absolute;
		transform: translateY(8rem);
		background-color: #10101020;
		padding: 5px 10px;
		border-radius: 4px;

		button {
			background-color: white;
			margin: 0 0.3rem;
			width: 10px;
			height: 10px;
			outline: none;
			border: none;
			padding: 0;
			border-radius: 50%;
		}

		.active {
			background-color: ${Theme.container};
		}
	}
`;
