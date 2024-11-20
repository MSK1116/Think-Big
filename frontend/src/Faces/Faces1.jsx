import React from "react";
import Faces_list from "./Faces.json";
import Faces1_card from "./Faces1_card";
import { Link } from "react-scroll";

const Faces1 = () => {
  const Faces = Faces_list.filter((data) => data.id > 0);
  return (
    <>
      <div className="bg-gray-50 p-8 h-full overflow-hidden  relative ">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-500">Visionary Thinkers</h1>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1">
          {Faces.map((Faces) => (
            <Faces1_card key={Faces.id} items={Faces} />
          ))}
        </div>
        <Link activeClass="active" to="mentor" smooth={true} offset={-50} duration={500}>
          <span data-aos-offset={100} data-aos-duration="700" data-aos="fade-left" className=" cursor-pointer  absolute right-0 top-1/2 rounded-s-lg p-2 font-semibold bg-gradient-to-tl from-green-500 to bg-green-600 opacity-65 text-gray-100">
            {" "}
            Scroll to mentor
          </span>
        </Link>
      </div>
    </>
  );
};

export default Faces1;
