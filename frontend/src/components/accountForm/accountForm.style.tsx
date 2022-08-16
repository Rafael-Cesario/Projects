import styled from 'styled-components';
import { palette } from '../../style/global.style';

export const AccountFormStyle = styled.div`
	background-color: ${palette.colors.mainBG};
	margin: 2rem;
	padding: 2rem;
	border-radius: 4px;

	button {
		border: none;
		outline: none;
		cursor: pointer;
	}

	.button-close {
		background-color: transparent;

		color: ${palette.colors.mainWhite};
		opacity: 0.6;
		font-family: ${palette.bodyFont}, 'Courier New', Courier, monospace;
		align-self: flex-start;
	}

	.form-title {
		font-family: ${palette.bodyFont};
		font-size: 1.5rem;
		font-weight: normal;
		margin: 2rem;
		text-align: center;
	}

	.button {
		border-radius: 4px;
		box-shadow: ${palette.boxShadow};
		background-color: ${palette.colors.blueBG};
		color: ${palette.colors.mainWhite};
		margin: 2rem;
		padding: 0.5rem 5rem;
		transition: 0.3s;

		:active {
			transform: scale(0.95);
		}
	}
`;
