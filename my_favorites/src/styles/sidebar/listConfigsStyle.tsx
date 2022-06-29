import styled from "styled-components";
import { colors } from "../globalStyle";

const margin = "40px";

export const ListConfigsStyle = styled.div`
	background: #101010c9;
	border-radius: 16px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(10px);

	z-index: 2;
	position: absolute;
	transform: translate(10rem, 30rem);
	padding: 50px;
	border-radius: 5px;

	display: flex;
	flex-direction: column;

	button {
		background-color: transparent;
		color: ${colors.fontBlue};
		font-weight: bold;
	}

	h2 {
		margin-bottom: 20px;
	}

	input {
		background-color: ${colors.background};
		outline: none;
		color: white;
		border: 2px solid transparent;
		padding: 5px 10px;
		border-radius: 5px;
		margin: 5px 0;
	}

	span {
		display: block;
		color: white;
		font-weight: bold;
		opacity: 0.8;
		font-size: 0.8rem;
	}

	.tag-option {
		margin-bottom: ${margin};
		.tag {
			display: flex;
		}
	}

	.icon {
		margin: 5px;
		font-size: 1.5rem;
		cursor: pointer;
		pointer-events: none;
	}

	.delete {
		color: #c51d1d;
	}

	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		margin: 20px 0;

		h1 {
			color: ${colors.fontBlue};
			margin-bottom: 10px;
		}

		button {
			font-size: 1.5rem;
		}
	}

	.list {
		display: flex;
		align-items: center;
		margin-bottom: ${margin};

		input {
			width: 100%;
		}
	}

	.save {
		font-size: 1.5rem;
		text-align: left;
		margin: ${margin} 0;
	}
`;
