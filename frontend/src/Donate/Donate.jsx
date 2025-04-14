import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import Donate_banner from "./Donate_banner";
import Donate_banner2 from "./Donate_banner2";
const Donate = () => {
  document.title = "Donate | Think Big Org - Together for Childhood, Against Injustice";
  const [stopView, setStopView] = useState(false);
  return (
    <>
      <Navbar />
      <Donate_banner2 />
      <Donate_banner />
      <Footer />
    </>
  );
};

export default Donate;
