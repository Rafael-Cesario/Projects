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

	input {
		padding: 10px 1rem;
		outline: none;
		border: none;
		color: white;
	}

	.title {
		margin: 2rem 0;
		width: 40vw;
		border-radius: 5px;
		background-color: transparent;
		font-size: 2rem;
		text-align: center;

		::placeholder {
			color: #ddd;
		}
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
`;
