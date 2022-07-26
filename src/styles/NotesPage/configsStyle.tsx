import styled from "styled-components";

import { colors } from "../Notebook.style";

const ConfigsStyle = styled.div`
	position: absolute;
	top: 20%;
	left: 50%;
	transform: translate(-50%, 0);

	font-family: "Oswald";
	background-color: #f0f0f0;
	box-shadow: 10px 10px 5px #00000089;
	color: black;
	width: 100%;
	max-width: 60rem;
	padding: 50px;
	border-radius: 5px;

	.head{
		display: flex;
		justify-content: space-between;
		align-items: center;

		button{
			font-size: 2rem;
			font-weight: bold;
			border:none;
			outline:none;
			background-color:transparent;
			color: black;
			cursor: pointer;
			transition: 0.1s ease;

			:hover {
				transform:scale(1.1)
			}
		}
	}

	h1 {
		margin-bottom: 3rem;
	}
	
	.configs {
		margin-bottom: 2rem;


		.config {
			display: flex;
			flex-direction: row;
			margin-bottom:1rem;
			align-items: center;

			p {
				margin-right: 1rem;
				font-weight: 500;
			}

			input {
				font-family: "Oswald";
				background-color: transparent;
				border: none;
				outline: none;
				font-weight: 500;
				font-size: 1rem;
				padding: 0.5rem 1rem;
				border-radius:5px;

				::placeholder {
					font-weight: 500;
					color: #313131;
				}

				::-webkit-color-swatch{
					border-radius:5px;
				}

				:focus {
					color: white;
					background-color: ${colors.BlackTwo};
				}
			}
		}
		.colors{
			input{
				padding: 0;
				:focus {
					background-color: transparent;
				}
			}
		}
	}

	.buttons {
		display: flex;
		justify-content: space-between;
		margin-top: 5rem;

		button {
			font-family: "Oswald";
			background-color: transparent;
			outline: none;
			border: none;
			font-size: 1rem;
			cursor: pointer;
			width: 10rem;

			&:hover {
				color: ${colors.BlueOne};
			}
		}
	}

	.delete-current-page {
		display: flex;
		justify-content: center;
		margin-top: 1rem;

		button {
			margin: 1rem;
			font-family: "Oswald";
			background-color: transparent;
			outline: none;
			border: none;
			font-size: 1rem;
			cursor: pointer;
		}
	}
`;

export { ConfigsStyle };
