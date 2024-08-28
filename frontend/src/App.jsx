import React, { useEffect } from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Register from "./register/Register";
import Aos from "aos";
import Faces from "./Faces/Faces";
import Events from "./Events/Events";

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
        <Route path="/member" element={<Faces />} />
        <Route path="/event" element={<Events />} />
      </Routes>
    </>
  );
};

export default App;
