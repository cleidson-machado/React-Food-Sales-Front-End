import "./App.css";
import Home from "./home/index";
import Login from "./login/index";
import Pizza from "./products/pizza/index";
import NotFound from "./404-notFound/index";
import { Route, Routes } from "react-router-dom";
import HelpInfo from "./help-info";
import Products from "./products/all-of-them/index";
import NavMenuCSS2 from "./core/components/NavMenuCSS2/index";
import { AuthProvider } from "./core/context/AuthContext";
import ProtectedRoute from "./core/utils/ProtectedRoute";

//## APP _STEP 01 | ROUTES LIST

function App() {
  return (
    <>
      <AuthProvider>
        <NavMenuCSS2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/products/"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products/pizza"
            element={
              <ProtectedRoute>
                <Pizza />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products/pizza/:id"
            element={
              <ProtectedRoute>
                <Pizza />
              </ProtectedRoute>
            }
          />
          <Route
            path="/help-info"
            element={
              <ProtectedRoute>
                <HelpInfo />
              </ProtectedRoute>
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
