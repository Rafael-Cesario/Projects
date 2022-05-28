import styled from "styled-components";
import { Style } from "./globalStyle";

const PlannerStyle = styled.div`
	overflow: hidden;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;

	.planner {
		background-color: ${Style.plannerBackground};
		display: grid;
		grid-template-columns: 5rem auto;
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
		align-items: center;
		transition: 0.1s ease;

		.icon {
			cursor: pointer;
			opacity: 0.5;
			margin-right: 1rem;
		}

		input {
			border: none;
			outline: none;
			background-color: transparent;
			font-size: 1rem;
			color: #fff;
			font-family: "Roboto";
			width: 100%;

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
