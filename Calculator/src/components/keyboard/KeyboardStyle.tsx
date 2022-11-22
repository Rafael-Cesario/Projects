import styled from 'styled-components';

export const KeyboardStyle = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;

	width: 12rem;

	background-color: #202020;
	border-radius: 0 0 1rem 1rem;
	padding-top: 1rem;

	.keyboard-keys {
		font-size: 1rem;
		color: #cfcfcf;
		width: 3rem;
		height: 3rem;

		border: none;
		outline: none;
		background-color: transparent;

		cursor: pointer;

		:hover {
			color: powderblue;
			background-color: #1558a5;
		}
	}
`;
