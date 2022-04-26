import styled from "styled-components";

const colors = {
	BlueOne: "#2a5da8",
};

const NotebookStyle = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-content: center;
	font-size: 0.7rem;
	font-weight: lighter;
	font-family: "Oswald";
	margin-top: 10rem;

	.note {
		border: 1px solid white;
		margin: 10px;
		padding: 9rem 3rem;
		border-radius: 5px;
		box-shadow: 10px 15px 5px #0000002f;
		cursor: pointer;
		transition: 0.1s;

		&:hover {
			transform: scale(1.1);
			border: 2px solid ${colors.BlueOne};

			h1 {
				color: ${colors.BlueOne};
			}
		}

		h1 {
			pointer-events: none;
			user-select: none;
		}
	}
`;

export { NotebookStyle, colors };
