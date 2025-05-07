import React, { useState } from "react";
import { FaSquare } from "react-icons/fa6";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const Events_banner3 = () => {
  const [counterState, setCounterState] = useState(false);
  return (
    <>
      <section className="max-w-screen-2xl w-full md:mt-5 mt-10 h-[80vh] overflow-hidden">
        <div className=" relative w-full  p-4 h-full bg-[url(/prg/prgg2.jpg)] bg-cover md:bg-center bg-right bg-no-repeat ">
          <div className=" absolute  w-full h-full inset-0 bg-gradient-to-r from-gray-300/95  to-slate-800/10"></div>
          <h2 className=" absolute text-gray-800 md:top-40 top-32  md:text-center text-left md:w-[45%] w-[90%]">
            At Think Big, we do more than just host events—we create transformative experiences that inspire change. Our programs are designed to ignite curiosity, foster collaboration, and empower every participant to turn their ideas into action.
            In addition to providing mentorship, we focus on critical social issues like child marriage and child labor, working actively to raise awareness and rescue affected children. Through hands-on workshops, insightful talks, and networking
            opportunities, we build a community where innovation thrives. Join us in our mission to inspire, make a difference, and create a better future together.
          </h2>
          <div data-aos="fade-down" data-aos-offset="300" className=" absolute -top-5 right-7 md:right-40">
            <div className=" ">
              <FaSquare className=" md:size-40  size-32 text-emerald-700 " />
              <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
                <span className=" absolute top-10  flex flex-col w-full justify-center items-center md:text-7xl text-5xl text-white">
                  {counterState && <CountUp start={0} end={11} duration={4} />} <span className="  text-sm text-white ">Event counter</span>
                </span>
              </ScrollTrigger>
            </div>
          </div>
        </div>
      </section>
      <hr></hr>
    </>
  );
};

export default Events_banner3;
