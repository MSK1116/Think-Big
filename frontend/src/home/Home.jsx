import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Home_banner from "./Home_banner";
import Butterfly from "../component/Butterfly";
import Home_banner2 from "./Home_banner2";

const Home = () => {
  return (
    <>
      <Navbar />
      <Home_banner />
      <Home_banner2 />
      <Footer />
    </>
  );
};

export default Home;
