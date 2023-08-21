import styled from "styled-components";
import { Theme } from "./theme";

export const StyledApp = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;

	.current-question {
		font-weight: bold;
		color: ${Theme.fadedText};
		margin-top: 2rem;
	}

	.question {
		display: flex;
		justify-content: center;
		max-width: 1000px;
		margin: 4rem;
		border-radius: ${Theme.borderRadius};
		min-height: 250px;
		padding: 4rem;
		background-color: ${Theme.text};
		position: relative;
		box-shadow: 10px 10px 10px #00000060;

		.title {
			position: absolute;
			transform: translateY(-6rem);
			padding: 5px 4rem;
			text-align: center;
			color: ${Theme.text};
			background-color: ${Theme.container};
			border-radius: ${Theme.borderRadius};
		}

		.text {
			color: ${Theme.background};
		}
	}

	.options {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-bottom: 4rem;
		max-width: 950px;

		.answer {
			background-color: ${Theme.container};
			border-radius: ${Theme.borderRadius};
			border: 2px solid transparent;
			outline: none;
			padding: 10px 20px;
			min-width: 400px;
			min-height: 100px;
			margin: 12px;
			color: ${Theme.text};
			cursor: pointer;
			transition: 0.3s;
			flex-grow: 1;

			&:hover {
				transform: scale(1.02);
				border: 2px solid ${Theme.primary};
			}

			&:focus {
				border: 2px solid ${Theme.primary};
			}
		}
	}

	.navigation {
		display: flex;
		flex-direction: column;
		margin-bottom: 4rem;

		.next {
			background-color: ${Theme.primary};
		}

		.back {
			background-color: transparent;

			&:hover {
				background-color: ${Theme.container};
			}
		}

		.next,
		.back {
			transition: 0.3s;
			margin-bottom: 1rem;
			font-size: 1.1rem;
			font-weight: bold;
			padding: 10px 20px;
			width: 30vw;
			color: ${Theme.text};
			border-radius: ${Theme.borderRadius};
			border: 2px solid transparent;
			outline: none;
			cursor: pointer;

			&:hover {
				transform: scale(1.02);
			}

			&:focus {
				border: 2px solid ${Theme.text};
			}
		}
	}
`;
