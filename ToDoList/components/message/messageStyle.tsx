import styled from 'styled-components';

export const MessageStyle = styled.div`
	position: absolute;
	margin: 4rem 0 0 8rem;
	bottom: 4rem;
	right: 8rem;

	background-color: ${(props) => props.color};
	border-radius: 5px;
	padding: 0.5rem 2rem;
	box-shadow: 5px 5px 0 #101010;
`;
