import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Image_Loader from "./Img_Loader";

const Error = () => {
  document.title = "Page not found | Think Big Org - Together for Childhood, Against Injustice";

  return (
    <>
      <Navbar />
      <section className=" max-w-screen-2xl w-full overflow-hidden p-8 md:min-h-screen min-h-[75vh]">
        <div className=" flex w-full justify-center p-8 items-center ">
          <Image_Loader styleForImg={"floating02 size-full object-cover"} styleForPar={" size-60 size-48"} src={"/404Error.png"} alt={"404 error | not found"} />
        </div>
        <div className=" md:text-5xl text-3xl font-semibold text-center">Sorry!</div>
        <h1 className=" text-center md:text-xl text-sm"> It seems like we don't have this page right now!</h1>
      </section>
      <Footer />
    </>
  );
};

export default Error;
