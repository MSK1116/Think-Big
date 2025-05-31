import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Joinevent = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    setTimeout(() => {
      window.location.href = "https://meet.google.com/oio-aexx-aum";
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen h-full max-w-screen-2xl w-full flex flex-col items-center justify-center">
        <p className="text-lg font-semibold">
          Redirecting to Meet <span className="text-red-500">{timeLeft}</span> seconds...
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Joinevent;
