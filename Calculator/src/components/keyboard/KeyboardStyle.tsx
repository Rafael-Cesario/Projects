import styled from 'styled-components';

export const KeyboardStyle = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;

	width: 12rem;

	background-color: #202020;
	border-radius: 0 0 1rem 1rem;
	padding-top: 1rem;
	overflow: hidden;

	.keyboard-keys {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 3rem;
		height: 3rem;

		border: none;
		outline: none;
		background-color: transparent;
		color: #cfcfcf;

		cursor: pointer;

		:nth-child(1) {
			color: crimson;
			font-size: 1.3rem;
		}

		:nth-child(20) {
			background-color: forestgreen;
			color: white;
		}

		:hover {
			color: powderblue;
			background-color: #1558a5;
		}
	}

	.operators {
		color: forestgreen;
	}
`;
