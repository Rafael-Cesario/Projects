import styled from "styled-components";
import { colors } from "../globalStyle";

const TagContainerStyle = styled.div`
	margin: 5rem 0;

	.title {
		color: ${colors.fontBlue};
		margin: 10px 0;
	}

	.tags button {
		background-color: transparent;
		color: white;
		opacity: 0.7;
		overflow: visible;

		.txt {
			font-weight: lighter;
			padding: 0;
			pointer-events: none;
		}

		.icon {
			background-color: transparent;
			font-size: 0.7rem;
			pointer-events: none;
		}

		:hover {
			opacity: 1;
		}
	}

	.tags .active {
		opacity: 1;
	}
`;

export { TagContainerStyle };
