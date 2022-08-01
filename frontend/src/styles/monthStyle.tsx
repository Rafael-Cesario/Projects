import styled from 'styled-components';
import { palette } from './globalStyle';

export const MonthStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 140px;

	button {
		border: none;
		outline: none;
		background-color: transparent;
		color: white;
		font-family: ${palette.fontFamily};
		cursor: pointer;

		::before {
			content: attr(data-name);
			position: absolute;
			transform: translate(-41px, -40px);
			visibility: hidden;
			pointer-events: none;
			background-color: ${palette.mainBlack};
			padding: 1px 10px;
			border-radius: ${palette.borderRadius};
		}

		:hover {
			::before {
				visibility: visible;
			}
		}
	}

	.year {
		display: flex;

		.title {
			margin: 2rem;
		}
	}

	.days {
		display: flex;
		flex-wrap: wrap;
		width: 80vw;
    max-width: 800px;
	}

	.day {
		width: 15px;
		height: 15px;
		margin: 2px;
		background-color: ${palette.mainBlack};
	}

	.active {
		background-color: ${palette.mainBlue};
	}

	.no-name {
		color: ${palette.mainWhite + 'aa'};
		font-weight: normal;
		letter-spacing: 1px;
		font-size: 1rem;
	}
`;
