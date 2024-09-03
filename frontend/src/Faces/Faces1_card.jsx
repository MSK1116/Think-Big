import React from "react";

const Faces1_card = ({ items }) => {
  return (
    <>
      <div>
        <div className="w-full rounded-lg p-12 flex z-0 flex-col justify-center items-center hover:shadow-lg">
          <div className="mb-8 rounded-full overflow-hidden">
            <img data-aos="zoom-in" className="object-center object-cover rounded-full h-36 w-36 " src={`/faces/` + items.photo} alt="photo"></img>
          </div>
          <div className="text-center">
            <p data-aos="fade-up" className="text-xl text-gray-700 font-bold mb-2">
              {items.title}
            </p>
            <p data-aos="fade-up" className="text-base text-gray-400 font-normal">
              {items.post}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faces1_card;
