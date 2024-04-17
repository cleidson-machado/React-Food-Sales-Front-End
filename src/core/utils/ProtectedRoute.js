import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

//## APP _STEP 03 | NEGATION LOGIC!

const ProtectedRoute = ({ children }) => {
  const { userLogged } = useContext(AuthContext);

  if (userLogged === false) {
    alert("User is Not Logged!");
    console.log("_STEP 03:" + typeof userLogged);
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
