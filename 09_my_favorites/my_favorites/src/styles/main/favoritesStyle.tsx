import styled from "styled-components";

export const FavoritesStyles = styled.div`
	display: flex;
	flex-wrap: wrap;

	.favorite {
		display: flex;
		flex-direction: column;
		width: 200px;
		height: 300px;
		margin: 10px;
		overflow: hidden;

		img {
			border-radius: 5px;
			width: inherit;
			height: inherit;
		}

		h2 {
			text-align: center;
		}
	}
`;
