import styled from "styled-components";

import { colors } from "../../globalStyle";

export const FilterStyle = styled.div`
	justify-self: center;

	.filter-container {
		position: absolute;
		z-index: 2;
		margin-top: 10px;
		display: flex;
		flex-wrap: wrap;

		.filter-menu,
		.filter-options {
			border-radius: 5px;
			background-color: ${colors.fontBlue};
			padding: 10px;
			height: fit-content;
			margin-right: 10px;

			button {
				background-color: transparent;
				width: 100%;
				display: flex;
				justify-content: space-between;
				opacity: 0.6;
				color: #000000;

				:hover {
					color: white;
					opacity: 1;
				}
			}

			span {
				margin-right: 40px;
				pointer-events: none;
			}

			.icon {
				pointer-events: none;
				background-color: transparent;
				color: white;
				font-size: 1.2rem;
				transform: rotate(-90deg);
				justify-self: flex-end;
				padding: 0;
			}

			.active {
				color: white;
				opacity: 1;
			}
		}
	}

	button {
		background: ${colors.background};
	}
`;
