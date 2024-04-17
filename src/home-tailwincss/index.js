import { Link } from "react-router-dom";

const HomeTailWindCss = () => {
  return (
    <>
      <div className="w-[1100px] mx-auto px-4 sm:px-6 lg:px-0">
        <h1 className="text-2xl text-center text-black font-bold">
          | Home Page |
        </h1>
        <p className="font-semibold text-xl ">
          Teste de Envio de parâmetros via rotas - Tarefa 03
        </p>
        <Link
          to="/products/pizza/100"
          className="text-blue-600 underline visited:text-blue-600 font-bold"
        >
          <span>Teste Pizza ID 100</span>
        </Link>
        <br />
        <Link
          to="/products/pizza/200"
          className="text-blue-600 underline visited:text-blue-600 font-bold"
        >
          <span>Teste Pizza ID 200</span>
        </Link>
        <br />
        <Link
          to="/products/pizza/124587524"
          className="text-blue-600 underline visited:text-blue-600 font-bold"
        >
          <span>Teste Pizza ID Num Cod. Maior</span>
        </Link>
        <br />
        <br />
        <p className="font-semibold text-xl ">Links List Tarefa 04</p>
        <Link
          to="/user-register"
          className="text-blue-600 underline visited:text-blue-600 font-bold"
        >
          <span>Tela / View Cadastro de Usuário</span>
        </Link>
        <br />
        <Link
          to="/users"
          className="text-blue-600 underline visited:text-blue-600 font-bold"
        >
          <span>Tela / View Listagem de Usuário</span>
        </Link>
      </div>
    </>
  );
};

export default HomeTailWindCss;
