import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Model from "./components/Model/Model";
import Models from "./components/Models/Models";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/models" element={<Models />} />
      <Route path="/models/:model" element={<Model />} />
    </Routes>
  );
}

export default Router;
