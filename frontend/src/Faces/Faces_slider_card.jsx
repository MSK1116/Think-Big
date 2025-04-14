import React from "react";

const Faces_slider_card = ({ items }) => {
  return (
    <>
      <div className="keen-slider__slide ">
        <blockquote className="hover:scale-105 transition-all duration-500 flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
          <div>
            <div className=" flex flex-row place-content-between">
              <div>
                <div className="flex gap-0.5 text-green-600">
                  <h1>{items.post}</h1>
                </div>
                <h2 className="text-2xl font-bold text-green-600 sm:text-3xl">{items.title}</h2>{" "}
              </div>
              <div>
                <img className=" object-center object-cover rounded-full w-20 h-20" src={`/faces/` + items.photo}></img>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="mt-4 leading-relaxed text-gray-700">{items.description} </h3>
            </div>
          </div>

          <h4 className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">Email &mdash; {items.email}</h4>
        </blockquote>
      </div>
    </>
  );
};

export default Faces_slider_card;
