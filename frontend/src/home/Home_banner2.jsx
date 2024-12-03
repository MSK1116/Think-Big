import React, { useEffect } from "react";
import Aos from "aos";
import Impact from "../component/Impact";

const Home_banner2 = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <>
      <section className=" md:h-screen max-w-screen-2xl  bg-[url(/webi/school1.jpg)] bg-cover bg-top bg-no-repeat bg-gray-50 rounded-md ">
        <div className="h-full  bg-gray-950/50 md:p-8 p-2 items-center flex flex-col space-y-11">
          <div data-aos="fade-up">
            <p data-aos="fade-up" className=" mt-6 text-white text-3xl font-extrabold">
              Together for Childhood, Against Injustice
            </p>
          </div>
          <div data-aos="zoom-in-up" className="md:w-1/3 w-full">
            <p className="text-center text-gray-50 font-semibold">We are dedicated to raising awareness, ending child marriage and labor, and ensuring every child has the opportunity to grow, learn, and thrive in a safe environment. </p>
          </div>
          <Impact />
        </div>
      </section>
    </>
  );
};

export default Home_banner2;
