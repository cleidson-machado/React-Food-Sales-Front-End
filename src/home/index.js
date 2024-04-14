import { Link } from "react-router-dom";
import "./style.css";

//## APP _STEP 04 | FREE ROUTE

const Home = () => {
  return (
    <div className="container">
      <h1>HOME-PAGE</h1>
      <p>Teste de Envio de parâmetros via rotas</p>
      <Link to="/products/pizza/100" className="active">
        <span>Teste Pizza ID 100</span>
      </Link>
      <br />
      <Link to="/products/pizza/200" className="active">
        <span>Teste Pizza ID 200</span>
      </Link>
      <br />
      <Link to="/products/pizza/124587524" className="active">
        <span>Teste Pizza ID Num Cod. Maior</span>
      </Link>
    </div>
  );
};

export default Home;

//### To Learn more and Remenber
//** Aprenda CSS Grid em 30 minutos - Tutorial Grid */
//https://youtu.be/8VapN6x897U

//### To Learn more and Remenber
//** CSS Grid - Crie Layouts Responsivos */
//https://youtu.be/KitbaxPkik4

//### https://developer.mozilla.org/pt-BR/play
//### https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout
//### https://www.w3schools.com/howto/howto_js_expanding_grid.asp

//### https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar
//### https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar_hor

//### https://legacy.reactjs.org/docs/introducing-jsx.html
