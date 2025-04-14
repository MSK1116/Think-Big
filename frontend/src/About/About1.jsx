import React from "react";
import SVGNature from "../svg/SVGNature";
import SVGTree from "../svg/SVGTree";
import Bee from "../component/Bee";
import { useNavigate } from "react-router-dom";

const About1 = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="max-w-screen-2xl  bg-gray-100">
        <div className="hidden md:block">
          <Bee num={4} />
        </div>

        <div className="">
          <div className="relative p-0 h-screen overflow-hidden ">
            <div className="absolute -bottom-8  md:left-0 -right-20 flex md:justify-start justify-center">
              <SVGTree Hei={200} Wid={200} />
            </div>

            <div className=" hidden md:block absolute -right-44 ">
              <SVGNature Hei={800} Wid={800} />
            </div>
            <div className=" mt-28 p-4 px-8 w-full text-sm h-screen">
              <h1 className="text-3xl font-extrabold text-green-600">About us</h1>
              <div className="md:w-1/2 p-1 md:p-2 w-[95%] h-full">
                <h2 className=" mt-4 ">
                  After tireless efforts by Bishnu P. Bhushal (Chief District Officer, Nepal Government) and our Organization President, Ram Julum Yadav, we finally got registration in 2024 with a mission to combat child exploitation, particularly
                  child marriage and child labor, in Nepal’s remote areas. We are committed to empowering children through education, mentorship, and awareness programs, ensuring they have the knowledge and resources to break free from societal
                  limitations and pursue brighter futures.
                </h2>
                <h2 className=" mt-6">
                  Legal Status<br></br> Regd. No. 3435/080/081 We are registered under the Association Registration Act, 2035 BS, Nepal. Complete details about our organization and legal framework, including our Social Welfare Council number, will be
                  updated by June 1, 2025. <br></br>🌱 Together, we can create a future where every child has the opportunity to learn, grow, and thrive.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About1;
