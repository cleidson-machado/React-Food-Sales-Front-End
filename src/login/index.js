import { useContext, useState } from "react";
import "./style.css";
import { AuthContext } from "../core/context/AuthContext";

//## APP _STEP 04 | FREE ROUTE

function Login() {
  const { loginUser } = useContext(AuthContext);

  const [logininfo, setlogininfo] = useState({
    email: "",
    password: "",
  });

  const handleEmailChange = (event) => {
    setlogininfo({ ...logininfo, email: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setlogininfo({ ...logininfo, password: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert(`Usuer ${logininfo.email} is logged with success!`);
    loginUser(logininfo);
  };

  return (
    <div className="container">
      <h1>LOGIN-PAGE</h1>
      <form className="loginform" onSubmit={handleSubmit}>
        <label htmlFor="email-id">Login Email:</label>
        <input id="email-id" type="email" onChange={handleEmailChange}></input>
        <label htmlFor="password-id">Password</label>
        <input
          id="password-id"
          type="password"
          onChange={handlePasswordChange}
        ></input>
        <button type="submit">Login-Action</button>
      </form>
    </div>
  );
}

export default Login;
