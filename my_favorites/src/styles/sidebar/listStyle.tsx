import styled from "styled-components";
import { colors } from "../globalStyle";

const margin = "40px";

const ListStyle = styled.div`
	margin: 5rem 0;

	.tag-btn {
		display: block;
		margin: 5px 0;

		.icon,
		.txt {
			margin: 0 5px;
		}
	}

	.title {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		color: ${colors.fontBlue};
		margin: 10px 0;

		.menu {
			padding: 5px;
			margin-left: 20px;
			background-color: transparent;

			.icon {
				color: ${colors.fontBlue};
				font-size: 1rem;
				background-color: transparent;
				margin: 0;
				padding: 0;
			}

			:hover {
				background-color: ${colors.background};
			}
		}

		.options {
			background: #101010c9;
			border-radius: 16px;
			box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(10px);

			z-index: 2;
			position: absolute;
			transform: translate(10rem, 30rem);
			padding: 50px;
			border-radius: 5px;

			display: flex;
			flex-direction: column;

			button {
				background-color: transparent;
				color: ${colors.fontBlue};
				font-weight: bold;
			}

			h2 {
				margin-bottom: 20px;
			}

			input {
				background-color: ${colors.background};
				outline: none;
				color: white;
				border: 2px solid transparent;
				padding: 5px 10px;
				border-radius: 5px;
				margin: 5px 0;
			}

			span {
				display: block;
				color: white;
				font-weight: bold;
				opacity: 0.8;
				font-size: 0.8rem;
			}

			.tag-option {
				margin-bottom: ${margin};
				.tag {
					display: flex;
				}
			}

			.icon {
				margin: 5px;
				font-size: 1.5rem;
				cursor: pointer;
			}

			.delete {
				color: #c51d1d;
			}

			.top {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				margin: 20px 0;

				h1 {
					color: ${colors.fontBlue};
					margin-bottom: 10px;
				}

				button {
					font-size: 1.5rem;
				}
			}

			.list {
				display: flex;
				align-items: center;
				margin-bottom: ${margin};

				input {
					width: 100%;
				}
			}

			.save {
				font-size: 1.5rem;
				text-align: left;
				margin: ${margin} 0;
			}
		}
	}

	.tags button {
		background-color: transparent;
		color: white;
		opacity: 0.7;
		overflow: visible;

		.txt {
			font-weight: lighter;
			padding: 0;
			pointer-events: none;
		}

		.icon {
			background-color: transparent;
			font-size: 0.7rem;
			pointer-events: none;
		}

		:hover {
			opacity: 1;
		}
	}

	.tags .active {
		opacity: 1;
	}
`;

export { ListStyle };
