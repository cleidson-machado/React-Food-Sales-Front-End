import { Link } from "react-router-dom";
import "./style.css";

const NavMenu = () => {
  return (
    <nav>
      <h1>Pizza Place Plus</h1>
      <ul>
        <li>
          <Link to="/">To-Home</Link>
        </li>
        <li>
          <Link to="/login">To-Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
