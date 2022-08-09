import styled from 'styled-components';
import { palette } from './global.style';

export const AppStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;

	.title {
		text-transform: uppercase;
		font-family: ${palette.titleFont};
		text-shadow: ${palette.boxShadow};
	}

	.paragraph {
		opacity: 0.7;
	}

	.buttons {
		margin: 5rem 0;
		transform: translateX(1rem);

		button {
			text-transform: uppercase;

			outline: none;
			font-family: ${palette.bodyFont};
			padding: 0.3rem 1rem;
			width: 10rem;
			border-radius: 4px;
			cursor: pointer;
			transition: 0.1s;
			box-shadow: ${palette.boxShadow};

			:hover {
				transform: scale(1.02);
			}

			:active {
				transform: scale(1);
			}
		}

		button:nth-child(1) {
			background-color: ${palette.mainWhite};
			margin-right: 1rem;
			border: none;
		}

		button:nth-child(2) {
			background-color: transparent;
			border: 1px solid ${palette.mainWhite};
			color: ${palette.mainWhite};
			margin-right: 1rem;
			opacity: 0.7;
		}
	}
`;
