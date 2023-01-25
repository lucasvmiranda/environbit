import react from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        {/* <Route component = { Sobre } path="/about" /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
