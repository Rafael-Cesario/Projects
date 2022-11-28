import { global } from '../../styles/appStyle';
import styled from 'styled-components';

export const ListsStyle = styled.div`
	display: flex;
	flex-direction: column;

	.list {
		margin: 1rem 0;
		width: 25rem;
		text-align: left;
		background-color: ${global.blue};
		padding: 1rem 2rem;
		border-radius: 5px;
		transition: 0.3s;
		text-transform: capitalize;

		:hover {
			background-color: #ddd;
			color: #222;
		}
	}
`;
