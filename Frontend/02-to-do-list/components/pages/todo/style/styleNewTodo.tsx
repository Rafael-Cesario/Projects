import { global } from '../../../../styles/appStyle';
import styled from 'styled-components';

export const SNewTodo = styled.div`
	margin: 2rem 0;
	margin-bottom: 4rem;
	width: 40vw;
	height: 2.5rem;
	background-color: #222;
	border-radius: 5px;
	overflow: hidden;

	input {
		width: 90%;
		background-color: #222;
	}

	button {
		background-color: ${global.blue};
		color: #ddd;
		border: none;
		outline: none;
		width: 10%;
		height: 100%;
		text-align: center;
		cursor: pointer;

		:hover {
			background-color: #fff;
			color: #222;
		}
	}
`;
