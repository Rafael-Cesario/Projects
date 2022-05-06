import styled from "styled-components";

const colors = {
	BlueOne: "#2a5da8",
	BlackTwo: "#1b1b1b",
	RedOne: "#963232",
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

	.add-nb {
		font-family: "Oswald";
		font-size: 1.5rem;
		background-color: transparent;
		color: white;

		&:hover {
			color: ${colors.BlueOne};
		}
	}

	.note {
		border: 1px solid white;
		margin: 10px;
		padding: 9rem 3rem;
		border-radius: 5px;
		box-shadow: 10px 15px 5px #0000002f;
		cursor: pointer;
		transition: 0.1s;
		width: 15rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		text-align: center;
		font-weight: lighter;

		&:hover {
			transform: scale(1.1);
			border: 2px solid ${colors.BlueOne};

			h1 {
				color: ${colors.BlueOne};
			}
		}

		&:active {
			transform: scale(0.95);
		}

		h1 {
			pointer-events: none;
			user-select: none;
			font-weight: lighter;
			text-transform: capitalize;
		}
	}

	.input-new-nb {
		background-color: transparent;
		outline: none;
		border: none;
		cursor: pointer;
		transition: 0.1s;
		text-align: center;

		color: white;
		font-size: 1.5rem;
		font-weight: lighter;
		font-family: "Oswald";
		margin-bottom: 20px;
	}

	.save-button {
		background-color: transparent;
		outline: none;
		border: 1px solid white;
		padding: 5px 20px;
		border-radius: 5px;
		cursor: pointer;
		transition: 0.1s;
		text-align: center;
		color: white;
		width: 100%;
		margin-bottom: 10px;
	}
`;

export { NotebookStyle, colors };
