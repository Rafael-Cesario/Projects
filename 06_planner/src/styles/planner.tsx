import styled from "styled-components";
import { Style } from "./globalStyle";

const PlannerStyle = styled.div`
	border-radius: 5px;
	overflow: hidden;
	background-color: ${Style.plannerBackground};

	.planner {
		display: grid;
		grid-template-columns: 1fr auto;
		justify-items: center;
		align-items: center;
	}

	.hour,
	.task {
		padding: 10px 20px;
		border: 2px dashed transparent;
	}

	.hour {
		font-family: "Roboto";
		font-weight: bold;
		background-color: ${Style.blue};
		height: 100%;
	}

	.task {
		display: flex;
		justify-content: space-between;
		align-items: baseline;

		.icon {
			cursor: pointer;
			opacity: 0.5;
			margin-right: 1rem;
		}

		textarea {
			resize: vertical;
			border: none;
			outline: none;
			background-color: transparent;
			font-size: 1rem;
			color: #fff;
			font-family: "Roboto";

			overflow: auto;

			::placeholder {
				color: #fff;
			}

			:focus {
				::placeholder {
					opacity: 0.1;
				}
			}
		}
	}
	.drag {
		border: 2px dashed #fff;
		opacity: 0.2;
	}
`;

export { PlannerStyle };
