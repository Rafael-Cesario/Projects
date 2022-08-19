import styled from 'styled-components';
import { palette } from '../../style/global.style';

export const CreateStyle = styled.div`
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

	.fields {
		margin: 2rem 0;
	}

	.field {
		margin: 3rem 0;
	}

	label {
		display: flex;
		justify-content: space-between;
		transform: translate(0px, -1.5rem);
		transition: 0.3s;
		opacity: 0.5;
		cursor: text;
		text-transform: capitalize;

		span {
			margin-left: 3rem;
			cursor: pointer;
		}
	}

	input {
		background-color: transparent;
		border: none;
		border-bottom: 1px solid ${palette.colors.mainWhite};
		outline: none;
		width: 100%;
		color: ${palette.colors.mainWhite};
		font-size: 1rem;
		padding: 0.2rem 0;

		:focus,
		:valid {
			border-bottom: 1px solid ${palette.colors.blueBG};
		}

		:focus ~ label,
		:valid ~ label {
			transform: translate(0px, -3rem);
		}
	}

	.error {
		border-bottom: 1px solid crimson;
	}
`;
