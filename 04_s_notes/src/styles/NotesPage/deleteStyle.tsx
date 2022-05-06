import Styled from "styled-components";

const DeleteStyle = Styled.div`
  padding: 20px;
  background-color: #962e2e;
  color: #ffffff;
  font-weight: 300;
  border-radius: 5px;



  input {
    background-color: transparent;
    border: none;
    outline:none;
    padding: 2px 5px;
    margin: 20px 0;
    color: white;

    ::placeholder {
					color: #a0a0a0;
				}   
  }
  
  .delete-buttons {
    display: flex;
    justify-content: space-between;

    button {
      border: none;
    outline:none;
    color: white;
    background-color: transparent;
    cursor: pointer;
    }
  }
`;

export { DeleteStyle };
