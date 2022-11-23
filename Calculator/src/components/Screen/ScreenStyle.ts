import styled from 'styled-components';

export const ScreenStyle = styled.div`
	height: 6rem;
	width: 10rem;
	background-color: #303030;
	border-radius: 1rem 1rem 0 0;
	padding: 1rem;

	display: flex;
	flex-direction: column-reverse;
	text-align: right;

	.current {
		color: #dddddd;
		font-weight: bold;
		text-overflow: ellipsis;
		overflow: hidden;
	}
`;
