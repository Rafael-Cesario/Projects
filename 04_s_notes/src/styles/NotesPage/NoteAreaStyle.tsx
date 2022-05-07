import styled from "styled-components";
import { colors } from "../Notebook.style";

const NoteAreaStyle = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem 4rem;
	box-shadow: 2px 2px 2px #00000045;

	p {
		width: 100%;
		max-width: 1000px;
		min-height: 50vh;

		background-color: ${colors.BlackTwo};
		margin-top: 1rem;
		align-self: center;
		border: none;
		border-radius: 5px;
		padding: 2rem;
		font-family: "Oswald";
		font-weight: lighter;
		outline: none;
	}
`;
export { NoteAreaStyle };
