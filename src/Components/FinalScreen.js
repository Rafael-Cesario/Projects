import { useNavigate } from "react-router-dom";

const Screen02 = ({ list, setC, setScreen01 }) => {
  const navigate = useNavigate();
  return (
    <div className="container-screen02">
      <h2>Lista Finalizada</h2>

      <div className="buttons">
        <button
          onClick={() => {
            document.location.reload();
          }}
        >
          Estudar Novamente
        </button>

        <button onClick={() => navigate(`/${list.name}/${list.index}`)}>
          Voltar para a lista
        </button>
      </div>

      <div className="container-words">
        {list.words.map((arr) => (
          <div key={arr} className="arr-words">
            {arr.map((word) => (
              <p key={word}>{word}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Screen02;
