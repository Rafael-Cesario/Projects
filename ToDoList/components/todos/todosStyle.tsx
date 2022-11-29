import styled from 'styled-components';

export const TodosStyle = styled.div`
	width: 40vw;

	.options {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		margin-bottom: -2rem;
		transform: translateY(-50px);
		pointer-events: none;
		opacity: 0;
		transition: 0.3s;
		position: relative;
		z-index: -1;

		.status {
			font-size: 1rem;
			span {
				margin-right: 10px;
			}

			select {
				border-radius: 5px;
				outline: none;
				border: none;
				background-color: #222;
				color: #ddd;
				padding: 10px 1rem;
				cursor: pointer;
			}
		}

		.menus {
			button {
				border-radius: 5px;
				cursor: pointer;
				outline: none;
				border: none;
				background-color: #222;
				color: #ddd;
				padding: 5px 15px;

				:nth-child(1) {
					margin-right: 1rem;
				}

				:hover {
					background-color: #ddd;
					color: #222;
				}
			}
		}
	}

	.active {
		margin-bottom: 2rem;
		transform: translateY(0);
		pointer-events: all;
		opacity: 1;
		z-index: 0;
	}

	.todo {
		z-index: 1;
		width: 100%;
		padding: 10px 1rem;
		text-align: left;
		color: white;
		background-color: #222;
		outline: none;
		border: none;
		margin: 1rem 0;
		border-radius: 5px;
		cursor: pointer;
		transition: 0.3s;

		:hover {
			color: #222;
			background-color: #ddd;
		}
	}

	.next::placeholder,
	.next {
		color: gray;
	}

	.current::placeholder,
	.current {
		color: #1f86c2;
	}

	.done::placeholder,
	.done {
		color: #21aa21;
	}
`;
