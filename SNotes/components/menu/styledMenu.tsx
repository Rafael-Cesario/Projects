import styled from 'styled-components';
import { InterfaceTheme } from '../../styles/styledTheme';

export const StyledMenu = styled.div<InterfaceTheme>`
	display: flex;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;

	.font-style,
	.font-size,
	.align,
	.colors {
		margin: 3.5rem 0.5rem;
		padding: 0.3rem 0;
		border-radius: 5px;
		background-color: ${(props) => props.theme.secondary};

		button {
			outline: none;
			border: none;
			background-color: transparent;
			color: ${(props) => props.theme.color};
			font-weight: bold;
			cursor: pointer;
			padding: 0.5rem 1rem;
		}

		button::after {
			position: absolute;
			opacity: 0;
			transform: translate(-50%, -50px);
			transition: 0.3s;
		}

		button:hover::after {
			opacity: 1;
		}
	}

	.font-style {
		button:nth-child(1) {
			::after {
				content: 'Negrito';
			}
		}

		button:nth-child(2) {
			font-style: italic;

			::after {
				content: 'Italico';
			}
		}

		button:nth-child(3) {
			text-decoration: underline;

			::after {
				content: 'Sublinhado';
			}
		}
	}

	.font-size button {
		:nth-child(1) {
			::after {
				content: 'Aumentar';
			}
		}

		:nth-child(3) {
			::after {
				content: 'Diminuir';
			}
		}
	}

	.align button {
		:nth-child(1)::after {
			content: 'Alinhamento a esquerda';
		}

		:nth-child(2)::after {
			content: 'Centralizar';
		}

		:nth-child(3)::after {
			content: 'Alinhamento a direita';
		}
	}

	.colors {
		display: flex;
		align-items: center;
		padding: 0 0.5rem;

		input {
			outline: none;
			border: none;
			background-color: transparent;
			width: 25px;
			height: 25px;
			margin: 0 0.1rem;
		}
	}
`;
