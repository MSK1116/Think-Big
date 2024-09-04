import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
const Donate = () => {
  document.title = "Donate | Think Big Org";
  return (
    <>
      <Navbar />
      <h1 className="pt-44 text-center h-screen bg-gray-50 text-red-500">
        Coming soon...
        <p className="text-center  bg-gray-50 text-red-600">
          You may contact us by{" "}
          <Link to="/contact" className=" underline">
            clicking me
          </Link>
        </p>
      </h1>

      <Footer />
    </>
  );
};

export default Donate;
