import "./App.css";
import Home from "./home/index";
import Login from "./login/index";
import Pizza from "./products/pizza/index";
import NotFound from "./404-notFound/index";
import { Route, Routes } from "react-router-dom";
import HelpInfo from "./help-info";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products/pizza" element={<Pizza />} />
      <Route path="/products/pizza/:id" element={<Pizza />} />
      <Route path="/help-info" element={<HelpInfo />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
