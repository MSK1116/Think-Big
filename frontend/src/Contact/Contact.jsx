import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Contact_banner1 from "./Contact_banner1";

const Contact = () => {
  useEffect(() => {
    document.title = " Contact | Think Big Org - Together for Childhood, Against Injustice";
  }, []);
  return (
    <>
      <Navbar />
      <Contact_banner1 />
      <Footer />
    </>
  );
};

export default Contact;
