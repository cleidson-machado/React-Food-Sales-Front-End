import { useState } from "react";
import "./style.css";

//By My Selft Whith React Docs - Error Fixed!

function Login() {
  const [logininfo, setlogininfo] = useState({
    email: "",
    password: "",
  });

  function handleEmailChange(event) {
    setlogininfo({ ...logininfo, email: event.target.value });
  }

  function handlePasswordChange(event) {
    setlogininfo({ ...logininfo, password: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The data send is: ${logininfo.email} and: ${logininfo.password}`);
  };

  return (
    <div className="container">
      <h1>LOGIN-PAGE</h1>
      <form className="loginform" onSubmit={handleSubmit}>
        <label htmlFor="email-id">Login Email:</label>
        <input
          id="email-id"
          name="email"
          type="email"
          onChange={handleEmailChange}
        ></input>
        <label htmlFor="password-id">Password</label>
        <input
          id="password-id"
          name="password"
          type="password"
          onChange={handlePasswordChange}
        ></input>
        <button type="submit">Login-Action</button>
      </form>
    </div>
  );
}

export default Login;
