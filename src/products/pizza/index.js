import { useParams } from "react-router-dom";
import "./style.css";

const Pizza = () => {
  const { id } = useParams();

  if (!id) {
    return (
      <div className="container">
        <h1>PIZZA-PAGE</h1>
        <p>No PIZZA Id Was Send</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>PIZZA-PAGE.. Teste de envio de parâmetro na Rota!</h1>
      <br />
      <p>
        O Id da Pizza é:{" "}
        <h2>
          <b>{id}</b>
        </h2>
      </p>
    </div>
  );
};

export default Pizza;
