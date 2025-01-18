import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdLocalActivity } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { FaPeopleCarry } from "react-icons/fa";

const Impact = () => {
  const [counterState, setCounterState] = useState(false);
  return (
    <>
      <div className=" cursor-default w-full md:p-11">
        <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
          <div className=" cursor-default    text-center gap-y-10  grid md:grid-cols-4 md:grid-rows-1 grid-cols-2 grid-rows-2 place-items-center ">
            <div data-aos="fade-up " data-aos-duration="700">
              <MdLocalActivity className="m-auto md:w-16 md:h-16 w-10 h-10  text-gray-100" />
              <h1 data-aos="fade-up" aos-duration="1000" className=" cursor-default text-xl md:text-5xl font-extrabold text-gray-50">
                {counterState && <CountUp start={1} end={12} duration={3} />}+
              </h1>
              <p data-aos="fade-up" aos-duration="1000" className=" cursor-default text-sm text-gray-100">
                Programs
              </p>
            </div>
            <div data-aos="fade-up " data-aos-duration="700">
              <FaHandsHelping className=" cursor-default m-auto md:w-16 md:h-16 w-10 h-10 text-gray-100" />
              <h1 data-aos="fade-up" aos-duration="1000" className=" cursor-default text-xl md:text-5xl font-extrabold text-gray-50">
                {counterState && <CountUp start={300} end={900} duration={3} />}+
              </h1>
              <p data-aos="fade-up" aos-duration="1000" className=" cursor-default text-sm text-gray-100">
                Students Helped
              </p>
            </div>
            <div data-aos="fade-up " data-aos-duration="700">
              <FaPeopleGroup className=" cursor-default m-auto md:w-16 md:h-16 w-10 h-10 text-gray-100" />
              <h1 data-aos="fade-up" aos-duration="1000" className=" cursor-default text-xl md:text-5xl font-extrabold text-gray-50">
                {counterState && <CountUp start={12} end={21} duration={3} />}+
              </h1>
              <p data-aos="fade-up" aos-duration="1000" className=" cursor-default text-sm text-gray-100">
                Member
              </p>
            </div>{" "}
            <div data-aos="fade-up " data-aos-duration="700">
              <FaPeopleCarry className=" cursor-default m-auto md:w-16 md:h-16 w-10 h-10 text-gray-100" />
              <h1 data-aos="fade-up" aos-duration="1000" className=" cursor-default text-xl md:text-5xl font-extrabold text-gray-50">
                {counterState && <CountUp start={1} end={5} duration={3} />}
              </h1>
              <p data-aos="fade-up" aos-duration="1000" className=" cursor-default text-sm text-gray-100">
                Social research
              </p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </>
  );
};

export default Impact;
