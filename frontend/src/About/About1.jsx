import React from "react";
import SVGNature from "../svg/SVGNature";
import SVGTree from "../svg/SVGTree";
import Bee from "../component/Bee";

const About1 = () => {
  return (
    <>
      <section className="max-w-screen-2xl  bg-gray-100">
        <Bee num={4} className="sm:hidden" />
        <div>
          <div className="relative p-0 justify-center items-center  h-screen overflow-hidden ">
            <div className="absolute -bottom-8 left-0 ">
              <SVGTree Hei={200} Wid={200} />
            </div>

            <div className=" absolute -right-44 ">
              <SVGNature Hei={800} Wid={800} />
            </div>
            <div className="absolute left-6 top-28 w-full p-4 ">
              <h1 className="text-3xl font-extrabold text-green-600">About us</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About1;
