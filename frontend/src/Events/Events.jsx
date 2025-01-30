import React from "react";
import Events_banner1 from "./Events_banner1";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Events_banner2 from "./Events_banner2";
import Events_banner3 from "./Events_banner3";

const Events = () => {
  document.title = "Events | Think Big Org";
  return (
    <>
      <Navbar />
      <Events_banner1 />
      <Events_banner3 />
      <Events_banner2 />
      <Footer />
    </>
  );
};

export default Events;
