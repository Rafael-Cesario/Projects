import styled from 'styled-components';

export const StyledTextContainer = styled.div`
	display: flex;
	justify-content: center;
	background-color: ${(props) => props.theme.secondary};
	color: ${(props) => props.theme.color};
	width: 70vw;
	max-width: 800px;
	min-height: 60vh;
	border-radius: 5px;
	margin-bottom: 5rem;

	.text {
		padding: 2rem;
		width: 100%;
		height: inherit;
		outline: none;
		margin-bottom: 10rem;
	}
`;
