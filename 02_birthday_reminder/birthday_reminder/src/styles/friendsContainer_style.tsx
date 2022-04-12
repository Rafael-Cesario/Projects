import { css } from "lit";

export const friendsContainer_Style = css`
	h2,
	p {
		margin: 0;
		font-weight: lighter;
		color: white;
	}

	.friends-container {
		background-color: #1a1a1a;
		border-radius: 5px;
		min-height: 90vh;
		padding: 20px;
		margin-top: 20px;
	}

	.search {
		color: white;
		padding-top: 20px;

		display: flex;
		flex-direction: column;
		margin-bottom: 20px;
	}

	.search h2 {
		font-size: 1rem;
	}

	.search button {
		margin-top: 10px;
		outline: none;
		border: none;
		border-radius: 5px;
		padding: 10px;
		background-color: #163450;
		color: white;
		cursor: pointer;
		align-self: flex-start;
	}

	.search input {
		outline: none;
		border: none;
		border-radius: 5px;
		padding: 10px;
		background-color: #292929;
		color: white;
		width: 90%;
	}

	.friends {
		display: flex;
		flex-direction: column;
	}

	.friend {
		color: white;
		display: flex;
		flex-direction: row;
		align-items: baseline;
		font-weight: lighter;
		cursor: pointer;
		padding: 5px 10px;
		border-radius: 5px;
		background-color: #292929;
		margin: 10px 0;
		max-width: 250px;
	}

	.friends h2 {
		margin-right: 10px;
		font-weight: lighter;
		font-size: 1.2rem;
		pointer-events: none;
	}

	.friend p {
		font-size: 0.8rem;
		pointer-events: none;
	}

	.add-friends {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin-bottom: 20px;
	}

	.add-friends input {
		outline: none;
		border: none;
		border-radius: 5px;
		padding: 10px;
		background-color: #292929;
		color: white;
		width: 100%;
	}

	.add-friends button {
		margin: 10px 0;
		outline: none;
		border: none;
		border-radius: 5px;
		padding: 10px;
		background-color: #163450;
		color: white;
		cursor: pointer;
	}

	.add-friends h2 {
		font-size: 1rem;
	}
`;
