import styled from "styled-components";

const NoteAreaStyle = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem 4rem;

	p {
		margin-top: 1rem;
		align-self: center;
		border: 1px solid #e7e7e7;
		border-radius: 5px;
		padding: 2rem;
		font-family: "Oswald";
		font-weight: lighter;
		outline: none;
		width: 50%;
		min-height: 80%;
	}
`;
export { NoteAreaStyle };
