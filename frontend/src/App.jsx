import React, { useEffect } from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Register from "./register/Register";
import Aos from "aos";

const App = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
