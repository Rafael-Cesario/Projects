import styled from "styled-components";

const NotesStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	.open-side-bar {
		position: absolute;
		top: 1rem;
		left: 1rem;

		border: none;
		outline: none;
		background-color: transparent;

		font-size: 2rem;
		cursor: pointer;

		.icon {
			color: white;
		}
	}
`;

export { NotesStyle };
