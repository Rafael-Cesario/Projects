import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body{
    background-color:#202020;
    color:white;
    display: grid;
    height: 100vh;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
  }

  .planner{
   display: grid;
   grid-template-columns: auto auto;
   background-color: #181818;
   border-radius: 8px;
   box-shadow: 5px 5px 5px #00000030;
   overflow: hidden;

   .time, .todo {
      padding: 10px;  

    p {
      padding: 10px 50px;     

    }
   }

   .time {
    text-align: center;
    background-color: #264675;

    p {

      padding: 10px 10px;
    }

   }

   .todo {
      p{
        cursor: pointer;

      :hover{
        background-color: #303030;
      }
      }
   }  
  }
`;

export { GlobalStyle };
