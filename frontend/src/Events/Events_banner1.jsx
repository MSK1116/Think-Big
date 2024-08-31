import React from "react";

const Events_banner1 = () => {
  return (
    <>
      <section data-aos="fade-zoom-out" data-aos-duration="1000" className="overflow-hidden mt-9 bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 data-aos="fade-down" className="text-3xl font-bold text-left text-green-600 mb-4">
              Events
            </h1>

            <p data-aos="fade-down" data-aos-delay="100" className=" text-gray-500 md:mt-4 text-sm md:text-[0.875rem]  md:block">
              In Think Big, we do more than just host events—we create transformative experiences. Our programs are crafted to ignite curiosity, foster collaboration, and empower every participant to turn their ideas into action. Whether through
              hands-on workshops, insightful talks, or networking opportunities, we are dedicated to building a community where innovation thrives and every voice is heard. Join us in our mission to inspire and make a difference together.{" "}
            </p>

            <div className="mt-4 md:mt-8">
              <button data-aos="fade-up" className=" cursor-not-allowed inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400">
                Register
              </button>
            </div>
          </div>
        </div>

        <div data-aos="zoom-in-lrft" className=" bg-[url(/webi/handprint.jpg)] bg-cover  object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]">
          <div className=" bg-black/50 h-full w-full flex items-center sm:self-end sm:rounded-ss-[30px]  md:rounded-ss-[60px]  ">
            <h1 className="text-gray-100 font-bold  mx-auto ">Upcomig event will appear here </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events_banner1;
