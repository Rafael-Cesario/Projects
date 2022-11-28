import styled from 'styled-components';
import { global } from './appStyle';

export const ListStyle = styled.div`
	* {
		font-family: ${global.fontFamily};
	}

	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 5rem;

	.title {
		margin: 2rem 0;
	}

	.menu {
		width: 40vw;
		margin: 2rem 0;
		display: flex;
		justify-content: space-between;

		.link {
			color: #999;
			text-decoration: none;

			:hover {
				color: white;
			}
		}

		.delete-list {
			border: none;
			outline: none;
			background-color: transparent;
			cursor: pointer;
			color: #999;
			font-size: 1rem;

			:hover {
				color: ${global.red};
			}
		}
	}

	.add-new-todo {
		margin: 2rem 0;
		margin-bottom: 4rem;
		width: 40vw;
		height: 2.5rem;
		background-color: #222;
		border-radius: 5px;
		overflow: hidden;

		input {
			width: 90%;
			padding: 10px 1rem;
			background-color: #222;
			outline: none;
			border: none;
			color: white;
		}

		button {
			background-color: ${global.blue};
			color: #ddd;
			border: none;
			outline: none;
			width: 10%;
			height: 100%;
			text-align: center;
			cursor: pointer;

			:hover {
				background-color: #fff;
				color: #222;
			}
		}
	}

	.todos {
		width: 40vw;

		.options {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			margin-bottom: -2rem;
			transform: translateY(-50px);
			pointer-events: none;
			opacity: 0;
			transition: 0.3s;

			.status {
				font-size: 1rem;
				span {
					margin-right: 10px;
				}

				select {
					border-radius: 5px;
					outline: none;
					border: none;
					background-color: #222;
					color: #ddd;
					padding: 10px 1rem;
					cursor: pointer;
				}
			}

			.menus {
				button {
					border-radius: 5px;
					cursor: pointer;
					outline: none;
					border: none;
					background-color: #222;
					color: #ddd;
					padding: 5px 15px;

					:nth-child(1) {
						margin-right: 1rem;
					}

					:hover {
						background-color: #ddd;
						color: #222;
					}
				}
			}
		}

		.active {
			margin-bottom: 2rem;
			transform: translateY(0);
			pointer-events: all;
			opacity: 1;
		}

		.todo {
			z-index: 2;
			width: 100%;
			padding: 10px 1rem;
			text-align: left;
			color: white;
			background-color: #222;
			outline: none;
			border: none;
			margin: 1rem 0;
			border-radius: 5px;
			cursor: pointer;
			transition: 0.3s;

			:hover {
				color: #222;
				background-color: #ddd;
			}
		}
	}
`;
