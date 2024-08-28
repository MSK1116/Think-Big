import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Faces_slider from "./Faces_slider";
import Faces_slider_card from "./Faces_slider_card";
import Faces1 from "./Faces1";

const Faces = () => {
  return (
    <>
      <Navbar />
      <Faces_slider />
      <Faces1 />
      <Footer />
    </>
  );
};

export default Faces;
