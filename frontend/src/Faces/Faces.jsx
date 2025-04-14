import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Faces_slider from "./Faces_slider";
import Faces_slider_card from "./Faces_slider_card";
import Faces1 from "./Faces1";

import AOS from "aos";
import "aos/dist/aos.css";
import Faces2 from "./Faces2";

const Faces = () => {
  document.title = "Faces | Think Big Org - Together for Childhood, Against Injustice";

  return (
    <>
      <Navbar />
      <Faces_slider />
      <Faces1 />
      <Faces2 />
      <Footer />
    </>
  );
};

export default Faces;
