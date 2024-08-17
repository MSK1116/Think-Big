import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Register = () => {
  useEffect(() => {
    location.href = "https://calendar.app.google/nJUiAR4WSiWZWF4H8";
  });
  return (
    <>
      <Navbar />
      <div className=" p-11 h-screen bg-white">
        <h1 className=" mt-11 text-red-600">Redirecting to google calender...</h1>
      </div>
      <Footer />
    </>
  );
};

export default Register;
