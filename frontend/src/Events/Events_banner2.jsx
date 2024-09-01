import React from "react";
import Gallery_card from "../Gallery/Gallery_card";
import eventsList from "./Events.json";
import { useNavigate } from "react-router-dom";
const Events_banner2 = () => {
  const navigate = useNavigate();
  const events3 = eventsList.filter((data) => data.id < 9);
  

  return (
    <>
      <section className="md:p-8 p-5 block  bg-gray-50">
        <h1 data-aos="fade-up" className="font-bold text-green-600 text-center md:text-left text-xl md:text-2xl ">
          See more
        </h1>
        <div className="grid md:grid-cols-3">
          {events3.map((events3) => (
            <Gallery_card key={events3.id} items={events3} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Events_banner2;
