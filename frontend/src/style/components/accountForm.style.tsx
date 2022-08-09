import styled from 'styled-components';
import { palette } from '../global.style';

export const AccountFormStyle = styled.div`
	position: absolute;
	top: 2%;
	right: 0;
	width: 50vw;
	height: 100vh;
	background-color: ${palette.mainBlue};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.form-title {
		text-align: center;
		font-family: ${palette.titleFont};
		margin-bottom: 5rem;
	}

	.button,
	.button-close {
		transition: 0.1s;
		font-family: ${palette.bodyFont};
		border: none;
		outline: none;
		padding: 0.3rem 1rem;
		cursor: pointer;
	}

	.button {
		margin-top: 5rem;
		width: 60%;
		border-radius: 4px;
		box-shadow: ${palette.boxShadow};

		:hover {
			transform: scale(1.02);
		}

		:active {
			transform: scale(1);
		}
	}

	.button-close {
		position: absolute;
		top: 0;
		left: 0;
		margin: 2rem;
		background-color: transparent;
		color: white;
		font-weight: bold;
	}
`;
