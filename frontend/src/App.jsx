import React from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Register from "./register/Register";

const App = () => {
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
