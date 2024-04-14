import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

//## APP _STEP 02 | CONTEXT LOGIC

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userLogged, setUserLogged] = useState(false);

  const [loaging, setLoaging] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setUserLogged(true);
    }
    setLoaging(false);
  }, []);

  const loginUser = async (credentials) => {
    const response = await fetch("http://localhost:3000/v1/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();
    localStorage.setItem("userInfo", JSON.stringify(data));

    navigate("/");
  };

  if (loaging) {
    return <h1>Loading...</h1>;
  }

  return (
    <AuthContext.Provider value={{ userLogged, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
