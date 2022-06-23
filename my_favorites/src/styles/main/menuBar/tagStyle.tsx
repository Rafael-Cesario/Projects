import styled from "styled-components";

export const TagStyle = styled.div`
	justify-self: start;
	display: flex;
	align-items: center;

	.tagName {
		border: none;
		outline: none;
		background-color: transparent;
		font-size: 1rem;
		font-family: "Roboto", "Courier New", Courier, monospace;
		margin-left: 5px;
		color: white;

		::placeholder {
			color: white;
		}
	}
`;
