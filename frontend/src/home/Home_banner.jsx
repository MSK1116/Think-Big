import React from "react";
import Logo1 from "../../public/Logo.png";

const Home_banner = () => {
  return (
    <>
      <section className="max-w-screen-2xl h-screen mt-8 p-8 flex flex-col ">
        <div className="mx-auto ">
          <img className=" w-56" src={Logo1}></img>
        </div>
        <p className=" text-center text-red-600">This website is under devlopment</p>
      </section>
    </>
  );
};

export default Home_banner;
