import React, { useEffect } from "react";
import Logo1 from "/Logo_noBg.png";
import img1 from "/Hope_Ai.jpeg";
import Butterfly from "../component/Butterfly";
import { ReactTyped } from "react-typed";
import Bee from "../component/Bee";
import Aos from "aos";

const Home_banner = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <>
      <div className="hidden md:block max-w-screen-2xl">
        <Bee />
      </div>
      <section className="max-w-screen-2xl  bg-gray-50 h-screen p-8 flex mt-8 flex-col items-center md:justify-center ">
        <div className=" w-full  flex flex-col items-center">
          <div data-aos="fade-down" className="">
            <img className=" w-56" src={Logo1}></img>
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="3000" className="">
            <ReactTyped className="mt-0 text-green-600 font-extrabold text-2xl" strings={[" Lifelong Learner and Mentor"]} typeSpeed={40} />
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
};

export default Home_banner;
