import React from "react";
import Faces_list from "./Faces.json";
import Faces1_card from "./Faces1_card";

const Faces1 = () => {
  const Faces = Faces_list.filter((data) => data.id > 0);
  return (
    <>
      <div className="bg-gray-50 p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-500">Visionary Thinkers</h1>
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

export default Faces1;
