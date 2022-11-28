import styled from 'styled-components';

export const global = {
	red: '#8f2828',
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
	}
`;
