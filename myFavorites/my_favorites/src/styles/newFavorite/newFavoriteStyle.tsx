import styled from "styled-components";

export const NewFavoriteStyle = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 2;
	background-color: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(5px);

	display: flex;
	justify-content: center;
	align-items: center;

	.container {
		padding: 50px;
		background: #101010c9;
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(10px);
		max-width: 600px;
		height: fit-content;
	}

	.user-inputs {
		margin: 50px 0;
		display: grid;
		grid-template-columns: 2fr 1fr;
		column-gap: 30px;
		justify-content: space-between;
	}
`;
