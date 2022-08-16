import styled from 'styled-components';
import { palette } from '../../style/global.style';

export const CreateAccountFormStyle = styled.div`
	margin: 2rem 0;

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

	/* padding: 2rem;
	width: 100%;
	height: 80%;

	.field {
		margin: 5rem 0;
	}

	label {
		display: flex;
		justify-content: space-between;
		position: absolute;
		transform: translate(0px, -1.5rem);
		transition: 0.3s;
		opacity: 0.5;
		cursor: text;
		width: 89%;

		span {
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
	} */
`;
