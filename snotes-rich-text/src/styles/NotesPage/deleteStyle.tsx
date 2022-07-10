import styled from "styled-components";

const DeleteStyle = styled.div`
	margin: 30px 0;
	padding: 20px;
	background-color: #111111;
	color: #ffffff;
	font-weight: 300;
	border-radius: 5px;

	input {
		background-color: transparent;
    font-size:1.5rem;
		border: none;
		outline: none;
		padding: 2px 5px;
		margin: 50px 0;
		color: white;

		::placeholder {
			color: #ffffff89;
		}
	}

	.delete-buttons {
		display: flex;
		justify-content: space-between;
    
		button {
      font-weight: 700;
      border: none;
			outline: none;
			color: white;
			background-color: transparent;
			cursor: pointer;
		}
	}
`;

export { DeleteStyle };
