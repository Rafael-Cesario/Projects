import { css } from "lit";

export const notes_style = css`
	* {
		margin: 0;
		font-weight: lighter;
	}

	.notes-container {
		background-color: #1a1a1a;
		color: white;
		border-radius: 5px;
		padding: 20px;
		flex-grow: 2;
		min-height: 90vh;
	}

	.title {
		margin-bottom: 50px;
	}

	.title .name::placeholder,
	.title .aniversary::placeholder {
		opacity: 1;
		color: white;
	}

	.title .name {
		display: block;
		font-family: "Oswald";
		font-size: 1.3rem;

		background-color: transparent;
		border: none;
		outline: none;
		color: white;
	}

	.title .aniversary {
		display: block;
		font-family: "Oswald";
		font-size: 1rem;

		background-color: transparent;
		border: none;
		outline: none;
		color: white;
	}

	.notes h2 {
		background-color: #163450;
		width: fit-content;
		padding: 2px 30px;
		border-radius: 5px;
		margin-bottom: 10px;
		font-size: 1.3rem;
	}

	.notes textarea {
		margin-bottom: 20px;
		background-color: #161616;
		border-radius: 5px;
		border: none;
		color: white;
		outline: none;
		resize: none;
		width: 95%;
		min-height: 100px;
		padding: 10px 20px;
	}

	.utilits {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.del-button {
		margin: 10px 0;
		outline: none;
		border: none;
		border-radius: 5px;
		padding: 10px;
		background-color: #9e2f2f;
		color: white;
		cursor: pointer;
	}
	.save-button {
		margin: 10px 0;
		outline: none;
		border: none;
		border-radius: 5px;
		padding: 10px;
		background-color: #163450;
		color: white;
		cursor: pointer;
	}

	.confirm {
		margin-top: 20px;
		flex-direction: column;
		align-items: center;
		display: none;
	}

	.confirm h2 {
		background-color: #9e2f2f;
		padding: 2px 10px;
		border-radius: 5px;
	}

	.confirm .buttons button {
		margin: 10px 0;
		outline: none;
		border: none;
		border-radius: 5px;
		padding: 10px;
		background-color: #9e2f2f;
		color: white;
		cursor: pointer;
	}

	.deleted-friend {
		text-transform: capitalize;
		opacity: 0.8;
	}
`;
