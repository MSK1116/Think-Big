import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Faq1 from "./Faq1";

const Faq = () => {
  useEffect(() => {
    document.title = " FAQs | Think Big Org - Together for Childhood, Against Injustice";
  }, []);
  return (
    <>
      <Navbar />
      <Faq1 />
      <Footer />
    </>
  );
};

export default Faq;
