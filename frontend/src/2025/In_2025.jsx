import React from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import In_2025_banner from "./In_2025_banner";

const In_2025 = () => {
  document.title = "In 2025 | Think Big Org";
  return (
    <>
      <Navbar />
      <In_2025_banner />
      <Footer />
    </>
  );
};

export default In_2025;
