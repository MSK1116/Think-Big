import React from "react";
import Logo1 from "/Logo_noBg.png";
import img1 from "/Hope_Ai.jpeg";
import Butterfly from "../component/Butterfly";
import { ReactTyped } from "react-typed";
import Bee from "../component/Bee";

const Home_banner = () => {
  return (
    <>
      <Bee />
      <section className="max-w-screen-2xl  bg-gray-50 h-screen p-8 flex flex-col items-center justify-center ">
        <div className=" w-full  flex flex-col items-center">
          <div className="">
            <img className=" w-56" src={Logo1}></img>
          </div>
          <div className="">
            <ReactTyped className="mt-0 text-green-600 font-extrabold text-2xl" strings={[" Lifelong Learner and Mentor"]} typeSpeed={40} />
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
};

export default Home_banner;
