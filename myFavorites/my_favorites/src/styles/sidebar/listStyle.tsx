import styled from "styled-components";
import { colors } from "../globalStyle";

const ListStyle = styled.div`
	margin: 5rem 0;

	.tag-btn {
		display: block;
		margin: 5px 0;

		.icon,
		.txt {
			margin: 0 5px;
		}
	}

	.title {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		color: ${colors.fontBlue};
		margin: 10px 0;

		.menu {
			padding: 5px;
			margin-left: 20px;
			background-color: transparent;

			.icon {
				color: ${colors.fontBlue};
				font-size: 1rem;
				background-color: transparent;
				margin: 0;
				padding: 0;
			}

			:hover {
				background-color: ${colors.background};
			}
		}
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

	.error {
		background-color: crimson !important;
		color: #ffffff !important;
	}
`;

export { ListStyle };
