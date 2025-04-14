import React from "react";

const Faces1_card = ({ items }) => {
  return (
    <>
      <div>
        <div className="w-full rounded-lg p-12 flex z-0 flex-col justify-center items-center hover:shadow-lg">
          <div className="mb-8 rounded-full overflow-hidden">
            <img alt={items.title} data-aos="zoom-in" className="object-center object-cover rounded-full h-36 w-36 " src={`/faces/` + items.photo}></img>
          </div>
          <div className="text-center">
            <h1 data-aos="fade-up" className="text-xl text-gray-700 font-bold mb-2">
              {items.title}
            </h1>
            <h2 data-aos="fade-up" className="text-base mb-0 text-gray-400 font-normal">
              {items.post}
            </h2>
            <a data-aos="fade-up" data-aos-delay="100" target="_blank" href={items.Link == "null" ? `mailto:${items.email}` : `https://${items.Link}s`} className=" text-gray-300 text-xs mt-0">
              {items.Link == "null" ? items.email : items.Link}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faces1_card;
