import styled from "styled-components";

import { colors } from "../Notebook.style";

const userWidth = "50%";

const ButtonNoteStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	padding: 0 2rem;

	.family,
	.size,
	.color-div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0 20px;
	}

	.simple {
		display: flex;
		flex-wrap: wrap;
		margin-top: 10px;
	}

	.compon {
		display: flex;
		flex-wrap: wrap;
		background-color: ${colors.BlackTwo};
		padding: 10px;
		border-radius: 5px;
		box-shadow: 2px 2px 2px #00000045;
	}

	button,
	input,
	select {
		font-family: "Times New Roman", Times, serif;
		margin: 5px;
		cursor: pointer;
		background-color: transparent;
		outline: none;
		color: #fff;
		border: none;
		font-size: 1rem;
	}

	button {
		border-radius: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.2rem;
		width: 2rem;
		height: 2rem;
		text-align: center;

		/* background-color: white;
		color: black; */

		&:hover {
			background-color: white;
			color: black;
		}

		&:active {
			transform: scale(0.95);
		}
	}

	sup,
	sub {
		font-size: 0.6rem;
	}

	.undo,
	.redo {
		font-size: 0.8rem;
	}

	.font-size,
	.font-family {
		padding: 5px;
		border-radius: 5px;
		border: none;
		outline: none;
		color: #000000;
		background-color: white;

		option {
			background-color: white;
		}
	}

	.color {
		color: #fff;
		width: 5rem;
		height: 2rem;

		&::-webkit-color-swatch {
			border-radius: 5px;
			outline: none;
			border: 1px solid white;
		}
	}

	.fav-colors {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0 20px;

		.colors {
			display: flex;
			flex-wrap: wrap;

			div {
				display: flex;
				flex-direction: column;
				align-items: center;

				input {
					margin: 0;
					padding: 0;
					outline: none;
					border: none;

					width: 25px;
					height: 25px;

					&::-webkit-color-swatch {
						border: 1px solid white;
						border-radius: 5px;
						outline: none;
					}
				}

				button {
					background-color: #dfdfdf;
					box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.116);
					margin: 0;
					padding: 0;
					border-radius: 5px;
					width: 15px;
					height: 10px;
				}
			}
		}
	}
`;

export { ButtonNoteStyle };
