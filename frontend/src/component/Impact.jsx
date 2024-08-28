import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { FaPeopleGroup } from "react-icons/fa6";

const Impact = () => {
  const [counterState, setCounterState] = useState(false);
  return (
    <>
      <div className="w-full md:p-11">
        <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
          <div className="   text-center gap-y-10  grid md:grid-cols-4 md:grid-rows-1 grid-cols-2 grid-rows-2 place-items-center ">
            <div className="">
              <FaPeopleGroup className="m-auto w-16 h-16 text-gray-100" />
              <h1 className="text-5xl font-extrabold text-gray-50">{counterState && <CountUp start={50} end={100} duration={3} />}+</h1>
              <p className="text-sm text-gray-100">Members</p>
            </div>
            <div>
              <FaPeopleGroup className="m-auto w-16 h-16 text-gray-100" />
              <h1 className="text-5xl font-extrabold text-gray-50">{counterState && <CountUp start={10} end={50} duration={3} />}+</h1>
              <p className="text-sm text-gray-100">Students Helped</p>
            </div>
            <div>
              <FaPeopleGroup className="m-auto w-16 h-16 text-gray-100" />
              <h1 className="text-5xl font-extrabold text-gray-50">{counterState && <CountUp start={50} end={90} duration={3} />}+</h1>
              <p className="text-sm text-gray-100">Connected Cities</p>
            </div>
            <div>
              <FaPeopleGroup className="m-auto w-16 h-16 text-gray-100" />
              <h1 className="text-5xl font-extrabold text-gray-50">{counterState && <CountUp start={50} end={100} duration={3} />}+</h1>
              <p className="text-sm text-gray-100">Program conducted</p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </>
  );
};

export default Impact;
