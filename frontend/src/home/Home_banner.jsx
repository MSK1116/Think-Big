import React, { useEffect } from "react";
import Logo1 from "/Logo_noBg.png";
import img1 from "/Hope_Ai.jpeg";
import Butterfly from "../component/Butterfly";
import { ReactTyped } from "react-typed";
import Bee from "../component/Bee";
import AOS from "aos";
import { Link } from "react-router-dom";
import Image_Loader from "../component/Img_Loader";

const Home_banner = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="hidden md:block max-w-screen-2xl">
        <Bee num={6} />
      </div>
      <section className="max-w-screen-2xl relative  mt-9 md:mt-0 md:h-screen flex  flex-col items-center md:justify-center ">
        <div className=" w-full h-full absolute inset-0 bg-[url(/webi/mountains.png)] bg-cover bg-center opacity-10 bg-no-repeat "></div>
        <div className="  w-full h-full bg-gradient-to-t z-10 from-gray-50 to-transparent flex flex-col items-center justify-center p-4 ">
          <div data-aos="zoom-out" data-aos-duration="1000" className="">
            <Image_Loader styleForPar={" w-56 "} styleForImg={"w-full h-full "} src={Logo1} />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="100" className=" text-center ">
            <ReactTyped className="mt-0 font-playwrite bg-transparent text-green-600 font-extrabold text-xl  md:text-2xl" strings={[" Ending Exploitation, Ensuring Education"]} typeSpeed={40} />
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
};

export default Home_banner;
