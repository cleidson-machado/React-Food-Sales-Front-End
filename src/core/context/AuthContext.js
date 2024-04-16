import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import userLoginAuth from "../services/user/user-login-auth";

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
    await userLoginAuth(credentials);
    if (userLogged) {
      navigate("/");
    }
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
