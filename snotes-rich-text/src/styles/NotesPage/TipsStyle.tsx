import styled from "styled-components";

import { colors } from "../Notebook.style";

const TipsStyle = styled.div`
  position: absolute;
	top: 20%;
	left: 50%;
	transform: translate(-50%, 0);

	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	background-color: #f0f0f0;
	box-shadow: 10px 10px 5px #00000089;
	color: black;
	width: 100%;
	max-width: 60rem;
	padding: 50px;
	border-radius: 5px;

  .head{
		display: flex;
		justify-content: space-between;
		align-items: center;

		button{
			font-size: 2rem;
			font-weight: bold;
			border:none;
			outline:none;
			background-color:transparent;
			color: black;
			cursor: pointer;
			transition: 0.1s ease;

			:hover {
				transform:scale(1.1)
			}
		}
	}

  .tip {
    margin: 2rem 0;

    h1{
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 10px;
    }

    p{
      color: #000000;
      font-weight: normal;
      margin-bottom: 10px;
    }

    ul {
			font-family: 'Times New Roman', Times, serif;
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
			column-gap:5px;
			width: 100%;
      list-style-type: none;			
			border-radius: 5px;
			padding: 0.5rem 1rem;
			background-color: ${colors.BlackTwo};
			color: white;

      li{
        margin-bottom: 5px;
      }
    }
  }
`;

export { TipsStyle }