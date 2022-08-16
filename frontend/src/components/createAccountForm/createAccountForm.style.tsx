import styled from 'styled-components';
import { palette } from '../../style/global.style';

export const CreateAccountFormStyle = styled.div`
	width: 60%;

	.field {
		margin: 5rem 0;
	}

	label {
		display: block;
		position: absolute;
		transform: translate(0px, -1.5rem);
		transition: 0.3s;
		opacity: 0.7;
		cursor: text;
	}

	input {
		background-color: transparent;
		border: none;
		border-bottom: 1px solid ${palette.mainWhite};
		outline: none;
		width: 100%;
		color: ${palette.mainWhite};
		font-size: 1rem;
		padding: 0.2rem 0;

		:focus ~ label,
		:valid ~ label {
			transform: translate(0px, -3rem);
		}
	}
`;
