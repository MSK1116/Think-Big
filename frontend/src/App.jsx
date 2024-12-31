import React, { useEffect } from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Register from "./register/Register";
import Aos from "aos";
import Faces from "./Faces/Faces";
import Events from "./Events/Events";
import Donate from "./Donate/Donate";
import Contact from "./Contact/Contact";
import Faq from "./Faq/Faq";
import About from "./About/About";
import Decoder from "./component/Decoder";

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
        <Route path="/giveus" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<About />} />
        <Route path="/decoder" element={<Decoder />} />
      </Routes>
    </>
  );
};

export default App;
