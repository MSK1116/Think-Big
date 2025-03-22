import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import Donate_banner from "./Donate_banner";
const Donate = () => {
  document.title = "Donate | Think Big Org";
  const [stopView, setStopView] = useState(false);
  return (
    <>
      {/* <div className=" relative ">
        <div className="flex flex-col items-center max-w-screen-2xl mt-4 absolute z-50 backdrop-blur-lg md:backdrop-blur-sm top-0 right-0 left-0 bottom-0 h-full w-full">
          <div className="rounded-lg w-64 p-12 flex z-0 flex-col bg-gray-100  justify-center items-center hover:shadow-lg">
            CONTACT
            <div className="mb-8 rounded-full overflow-hidden">
              <img alt="photo" data-aos="zoom-in" className="object-center object-cover rounded-full h-36 w-36 " src={"faces/shital.jpg"}></img>
            </div>
            <div className="text-center">
              <p data-aos="fade-up" className="text-xl text-gray-700 font-bold mb-2">
                Shital Karki
              </p>
              <p data-aos="fade-up" className="text-base mb-0 text-gray-400 font-normal">
                Treasury
              </p>
              <a data-aos="fade-up" data-aos-delay="100" target="_blank" href={"callto:9748478824"} className=" text-gray-700 text-xs mt-0">
                {" "}
                +977 9748478824
              </a>
            </div>
          </div>
          <span className=" text-center">Donation directly through wbesite isn't possible in your place</span>
        </div> */}
      <Navbar />
      <Donate_banner />
      <Footer />
      {/* </div> */}
    </>
  );
};

export default Donate;
