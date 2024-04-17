import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";
import OptionsMenu from "../OptionsMenu/optionsMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoHome } from "react-icons/io5";

const NavMenuCSS2 = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="topnav">
      <Link to="/" className="active">
        <span>
          <IoHome />
        </span>
      </Link>
      {isToggled && <OptionsMenu />}
      <Link className="icon" onClick={() => setIsToggled(!isToggled)}>
        <span>
          <GiHamburgerMenu />
        </span>
      </Link>
    </div>
  );
};

export default NavMenuCSS2;
