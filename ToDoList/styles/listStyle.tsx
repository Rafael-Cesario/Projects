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
		width: 50vw;
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
		width: 50vw;
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

	.todo {
		color: white;
		background-color: blue;
	}
`;
