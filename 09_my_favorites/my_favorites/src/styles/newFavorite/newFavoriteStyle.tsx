import styled from "styled-components";

export const NewFavoriteStyle = styled.div`
	position: absolute;
	top: 7%;
	left: 50%;
	width: 100%;
	transform: translate(-50%);

	max-width: 600px;
	min-height: 80%;
	padding: 50px;

	/* From https://css.glass */
	background: #101010c9;
	border-radius: 16px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(10px);

	.user-inputs {
		margin: 50px 0;
		display: grid;
		grid-template-columns: 2fr 1fr;
		column-gap: 30px;
		justify-content: space-between;
	}
`;
