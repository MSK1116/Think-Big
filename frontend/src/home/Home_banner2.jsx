import React from "react";

const Home_banner2 = () => {
  return (
    <>
      <section className="overflow-hidden md:h-screen  bg-[url(/webi/school1.jpg)] bg-cover bg-top bg-no-repeat shadow-black rounded-md shadow-xl">
        <div className="h-full bg-gray-950/50 p-8 items-center flex flex-col space-y-11">
          <div>
            <p className=" text-white text-3xl font-extrabold"> We Learn, We Teach</p>
          </div>
          <div className="w-1/3">
            <p className="text-center text-gray-50 font-semibold">Passionate about discovering new knowledge and sharing it with others. Let’s inspire each other and make learning a joyful journey together! </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home_banner2;
