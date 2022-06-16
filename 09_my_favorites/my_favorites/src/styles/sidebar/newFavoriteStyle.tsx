import styled from "styled-components";
import { colors } from "../globalStyle";

export const NewFavoriteStyle = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	width: 100%;
	transform: translate(-50%, -50%);

	max-width: 600px;
	min-height: 80%;
	padding: 50px;
	/* From https://css.glass */
	background: #101010c9;
	border-radius: 16px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(10px);

	.topmenu {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;

		h2 {
			color: ${colors.fontBlue};
		}

		.buttons {
			display: flex;

			button {
				background-color: ${colors.fontBlue};
				color: white;
				padding: 10px 20px;
				margin: 10px;
			}
		}
	}

	form {
		margin: 50px 0;
		display: grid;
		grid-template-columns: 2fr 1fr;
		column-gap: 30px;
		justify-content: space-between;

		.preview {
			display: flex;
			flex-wrap: wrap;

			flex-direction: column;
			grid-area: 1 / 2 / span 5 / span 1;
			transform: translateY(30px);

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

			.tags {
				width: 10rem;
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(3rem, 10rem));
				background-color: ${colors.background};
				border-radius: 5px;
				margin-bottom: 5px;
				padding: 5px;
				justify-content: center;
				overflow: hidden;

				.tag {
					border-radius: 3px;
					cursor: pointer;
					margin: 5px;
					display: flex;
					align-items: center;
					background-color: ${colors.fontBlue};
					padding: 0 5px;
					justify-content: space-between;

					i {
						margin-left: 3px;
						font-size: 0.7rem;
					}
				}
			}
		}

		.fild {
			display: flex;
			flex-direction: column;
			margin: 10px 0;
			width: 100%;

			span {
				color: white;
				font-family: "Roboto", "Courier New", Courier, monospace;
				font-weight: lighter;
				font-size: 0.9rem;
				margin-bottom: 5px;
			}

			input {
				border-radius: 5px;
				outline: none;
				padding: 10px 20px;
				width: 100%;
				color: white;
				border: none;
				background-color: ${colors.background};
			}
		}
	}
`;
