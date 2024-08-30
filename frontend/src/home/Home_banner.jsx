import React, { useEffect } from "react";
import Logo1 from "/Logo_noBg.png";
import img1 from "/Hope_Ai.jpeg";
import Butterfly from "../component/Butterfly";
import { ReactTyped } from "react-typed";
import Bee from "../component/Bee";
import AOS from "aos";
import { Link } from "react-router-dom";

const Home_banner = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="hidden md:block max-w-screen-2xl">
        <Bee />
      </div>
      <section className="max-w-screen-2xl mt-9 md:mt-0  bg-gray-50 md:h-screen p-8 flex  flex-col items-center md:justify-center ">
        <div className=" w-full  flex flex-col items-center">
          <div data-aos="fade-down" className="">
            <img className=" w-56" src={Logo1}></img>
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="100" className="">
            <ReactTyped className="mt-0 text-green-600 font-extrabold text-xl md:text-2xl" strings={[" Lifelong Learner and Mentor"]} typeSpeed={40} />
          </div>
          {/* <Link to={"/register"} className="  mt-5 btn">
            {" "}
            Register for Aug-24 webinar
          </Link> */}
        </div>
        <div></div>
      </section>
    </>
  );
};

export default Home_banner;
