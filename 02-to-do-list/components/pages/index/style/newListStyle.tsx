import { global } from '../../../../styles/appStyle';
import styled from 'styled-components';

export const NewListStyle = styled.div`
	background-color: ${global.blue};
	margin: 1rem 0;
	border-radius: 5px;
	padding: 1rem 1.5rem;
	animation: showlist 0.5s;
	width: 40vw;
	max-width: 400px;

	@keyframes showlist {
		0% {
			opacity: 0;
			transform: translateX(5rem);
		}
		100% {
			opacity: 1;
			transform: translateX(0rem);
		}
	}

	.list-name {
		border: none;
		outline: none;
		background-color: transparent;
		border-radius: 5px;
		width: 100%;
		margin: 1rem 0 2rem 0;
		font-family: ${global.fontFamily};
		font-size: 1rem;
		font-weight: bold;
		color: #dddddd;
		cursor: pointer;

		::placeholder {
			color: #dddddd50;
		}
	}

	.menus {
		display: flex;
		flex-direction: row;

		.menu {
			background-color: #202020;
			border-radius: 5px;
			padding: 0.5rem;
			margin-right: 1rem;

			/* :nth-child(1) {
				color: forestgreen;
			}

			:nth-child(2) {
				color: crimson;
			} */
		}
	}
`;
