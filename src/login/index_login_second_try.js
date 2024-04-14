import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

//By The Teacher Example...

function Login() {
  const navigate = useNavigate();

  const [logininfo, setlogininfo] = useState({
    email: "",
    password: "",
  });

  const handleValues = (event) => {
    setlogininfo({
      ...logininfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Usuer ${logininfo.email} is logged with success!`);
    navigate("/");
  };

  return (
    <div className="container">
      <h1>LOGIN-PAGE</h1>
      <form onSubmit={handleSubmit} className="loginform">
        <label htmlFor="email-id">Login Email:</label>
        <input
          id="email-id"
          name="email"
          type="email"
          onChange={handleValues}
        ></input>
        <label htmlFor="password-id">Password</label>
        <input
          id="password-id"
          name="password"
          type="password"
          onChange={handleValues}
        ></input>
        <button type="submit">Login-Action</button>
      </form>
    </div>
  );
}

export default Login;
