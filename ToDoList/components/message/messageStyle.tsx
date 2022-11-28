import styled from 'styled-components';

export const MessageStyle = styled.div`
	position: absolute;
	margin: 4rem 0 0 8rem;
	bottom: 4rem;
	right: 8rem;

	background-color: ${(props) => props.color};
	border-radius: 5px;
	padding: 1rem 2rem;
	box-shadow: 10px 10px 10px #11111120;
	animation: showMessage 0.5s;

	@keyframes showMessage {
		from {
			transform: translateX(50px);
			opacity: 0.5;
		}

		to {
			transform: translateX(0);
			opacity: 1;
		}
	}
`;
