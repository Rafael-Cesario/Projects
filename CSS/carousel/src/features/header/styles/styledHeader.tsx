import { styled } from "styled-components";

export const StyledHeader = styled.div`
	margin: 1rem;
	display: flex;
	justify-content: space-between;

	.sidebar-title {
		display: flex;
		align-items: center;
		height: fit-content;

		.title {
			font-size: 1.2rem;
			margin: 0 1rem;
		}

		.icon {
			width: 20px;
			height: 20px;
		}
	}

	.top {
		display: flex;
	}
`;
