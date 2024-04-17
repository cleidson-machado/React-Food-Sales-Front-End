import { Link } from "react-router-dom";

const OptionsMenu = () => {
  return (
    <div>
      <Link to="/login"> Login-Test-Page </Link>
      <Link to="/products/pizza"> Pizza-Form </Link>
      <Link to="/help-info"> Help-Info </Link>
    </div>
  );
};

export default OptionsMenu;
