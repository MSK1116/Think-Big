import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import SVGNature from "../svg/SVGNature";
import About1 from "./About1";

const About = () => {
  document.title = "About us | Think Big Org - Together for Childhood, Against Injustice";
  return (
    <>
      <Navbar />
      <About1 />
      <Footer />
    </>
  );
};

export default About;
