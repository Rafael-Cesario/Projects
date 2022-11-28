import styled from 'styled-components';
import { global } from './appStyle';

export const ListStyle = styled.div`
	* {
		font-family: ${global.fontFamily};
	}

	display: flex;
	justify-content: center;
	margin: 5rem;
`;
