import styled from 'styled-components';
import { createImportEqualsDeclaration } from 'typescript';

export const global = {
	red: '#a32525',
	blue: '#245195',
	fontFamily: 'Work Sans',
};

export const AppStyle = styled.div`
	margin: 4rem 8rem;

	button {
		outline: none;
		border: none;
		background-color: transparent;
		color: #dddddd;
		font-weight: bold;
		font-family: 'Work Sans';
		cursor: pointer;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.title {
			h1 {
				margin: 0;
			}

			p {
				margin: 0;
				opacity: 60%;
			}
		}

		.menus {
			background-color: #202020;
			padding: 1rem;
			border-radius: 10px;

			.menu {
				margin: 0 1rem;

				:nth-child(1) {
					color: #a93434;
				}

				:hover {
					color: #303030;
				}
			}
		}
	}

	main {
		margin: 2rem 0;
		min-height: 70vh;
		display: flex;
		flex-direction: column;
		justify-content: center;

		.lists {
			display: flex;
			flex-direction: column;

			.list {
				margin: 1rem 0;
				width: 25rem;
				text-align: left;
				background-color: ${global.blue};
				padding: 1rem 2rem;
				border-radius: 5px;
			}
		}
	}
`;
