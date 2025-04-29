import React, { useEffect } from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Aos from "aos";
import Faces from "./Faces/Faces";
import Events from "./Events/Events";
import Donate from "./Donate/Donate";
import Contact from "./Contact/Contact";
import Faq from "./Faq/Faq";
import About from "./About/About";
import Decoder from "./component/Decoder";
import In_2025 from "./2025/In_2025";
// import Mailer from "./component/Mailer";
import Joinevent from "./component/Joinevent";
import Apply from "./apply/Apply";

const App = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member" element={<Faces />} />
        <Route path="/event" element={<Events />} />
        <Route path="/giveus" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<About />} />
        <Route path="/decoder" element={<Decoder />} />
        <Route path="/2025" element={<In_2025 />} />
        <Route path="/apply" element={<Apply />} />
        {/* <Route path="/mailer" element={<Mailer />} /> */}
        <Route path="/joinevent" element={<Joinevent />} />
      </Routes>
    </>
  );
};

export default App;
