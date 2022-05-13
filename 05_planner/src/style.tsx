import styled from "styled-components";

const PlannerStyle = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 100px auto;
  margin: 100px;

  .hours,
  .todos {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .hours p,
  .todos .to-do {
    height: 2rem;
    display: flex;
    align-items: center;
    margin: 15px;
  }

  .hours p,
  .to-do input {
    padding: 15px 20px;
    font-weight: bold;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1rem;
  }

  .hours {
    background-color: #163853;
    border-radius: 4px 0 0 4px;
  }

  .todos {
    border-radius: 0 4px 4px 0;

    .to-do {
      input {
        background-color: transparent;
        outline: none;
        border: 1px solid rgb(40, 40, 40);
        border-radius: 4px;
        color: white;
      }

      button {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;

        .icon {
          pointer-events: none;
          font-size: 2rem;
          color: white;
        }
      }
    }
  }
`;

export { PlannerStyle };
