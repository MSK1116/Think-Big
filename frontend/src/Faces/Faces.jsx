import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Faces_slider from "./Faces_slider";
import Faces_slider_card from "./Faces_slider_card";

const Faces = () => {
  return (
    <>
      <Navbar />
      <Faces_slider />

      <Footer />
    </>
  );
};

export default Faces;
