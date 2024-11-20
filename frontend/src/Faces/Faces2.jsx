import React from "react";
import Faces from "./MFaces.json";
import Faces1_card from "./Faces1_card";

const Faces2 = () => {
  return (
    <>
      <div name="mentor" className="bg-gray-50 p-8 h-full z-0">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-500">Our Mentors</h1>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1">
          {Faces.map((Faces) => (
            <Faces1_card key={Faces.id} items={Faces} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Faces2;
