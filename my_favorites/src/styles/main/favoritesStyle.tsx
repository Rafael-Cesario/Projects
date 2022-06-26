import styled from "styled-components";

export const FavoritesStyles = styled.div`
	display: flex;
	width: fit-content;
	margin-top: 10px;
	flex-wrap: wrap;
	justify-content: center;

	.favorite {
		width: 8rem;
		height: 11rem;
		margin: 10px;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		user-select: none;

		p,
		img {
			pointer-events: none;
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 5px;
			transition: 0.1s ease;
		}

		p {
			width: 7rem;
			display: none;
			pointer-events: none;
			z-index: 1;
			font-family: "Courier New", Courier, monospace;
			font-size: 1rem;
			opacity: 0.8;
			position: absolute;
			text-align: center;
			text-transform: capitalize;
			text-shadow: 1px 1px 1px #000000;
		}

		:hover {
			p {
				display: block;
			}
			img {
				filter: blur(2px) brightness(50%);
			}
		}
	}
`;
