import React from "react";
import Gallery_card from "./Gallery_card";
import eventsList from "../Events/Events.json";
import { useNavigate } from "react-router-dom";
const Gallery = () => {
  const navigate = useNavigate();
  const events3 = eventsList.filter((data) => data.id < 4);

  return (
    <>
      <section className="md:p-8 p-5 block mt-3 bg-gray-50">
        <h1 className="font-bold text-green-600 text-center md:text-left text-xl md:text-2xl ">Think Big at glance</h1>
        <div className="grid md:grid-cols-3">
          {events3.map((events3) => (
            <Gallery_card key={events3.id} items={events3} />
          ))}
        </div>
        <div className="flex">
          <button onClick={() => navigate("/event")} className="m-auto btn">
            Go to gallery
          </button>
        </div>
      </section>
    </>
  );
};

export default Gallery;
