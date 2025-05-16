import React, { useEffect } from "react";
import KeenSlider from "https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm";
import Faculty_list from "./Faces.json";
import Faces_slider_card from "./Faces_slider_card";
import AOS from "aos";

const Faces_slider = () => {
  const sliderFac = Faculty_list.filter((data) => data.slider === "true");

  useEffect(() => {
    // Initialize the KeenSlider
    const keenSliderInstance = new KeenSlider("#keen-slider", {
      loop: true,
      slides: {
        origin: "center",
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    });

    setTimeout(() => {
      AOS.refresh();
    }, 500);

    // Add event listeners for navigation buttons
    const keenSliderPrevious = document.getElementById("keen-slider-previous");
    const keenSliderNext = document.getElementById("keen-slider-next");
    const keenSliderPreviousDesktop = document.getElementById("keen-slider-previous-desktop");
    const keenSliderNextDesktop = document.getElementById("keen-slider-next-desktop");

    const handlePrev = () => keenSliderInstance.prev();
    const handleNext = () => keenSliderInstance.next();

    keenSliderPrevious.addEventListener("click", handlePrev);
    keenSliderNext.addEventListener("click", handleNext);
    keenSliderPreviousDesktop.addEventListener("click", handlePrev);
    keenSliderNextDesktop.addEventListener("click", handleNext);

    // Cleanup on unmount
    return () => {
      keenSliderPrevious.removeEventListener("click", handlePrev);
      keenSliderNext.removeEventListener("click", handleNext);
      keenSliderPreviousDesktop.removeEventListener("click", handlePrev);
      keenSliderNextDesktop.removeEventListener("click", handleNext);
      keenSliderInstance.destroy(); // Clean up the KeenSlider instance
    };
  }, []);

  return (
    <>
      <section className="bg-gray-50 p-8 ">
        <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
          <h1 className="text-3xl font-bold text-green-600 mb-4">Our Team</h1>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Lifelong Learner and Mentor</h2>
              <p className="mt-4 text-gray-700">
                Think Big is a community driven by innovation and collaboration, where every idea is valued, and every challenge is an opportunity. Together, we empower each other to push boundaries, inspire change, and create a future where our
                collective vision shapes the world for the better.
              </p>
              <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                <button aria-label="Previous slide" id="keen-slider-previous-desktop" className="rounded-full border group border-green-600 p-3 text-green-600 transition hover:bg-green-600 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 group-active:-translate-x-1 transition-all  rtl:rotate-180">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button aria-label="Next slide" id="keen-slider-next-desktop" className="rounded-full group border border-green-600 p-3 text-green-600 transition hover:bg-green-600 hover:text-white">
                  <svg className="size-5 rtl:rotate-180 group-active:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="-mx-6 lg:col-span-2 lg:mx-0">
              <div id="keen-slider" className="keen-slider">
                {sliderFac.map((sliderFac) => (
                  <Faces_slider_card key={sliderFac.id} items={sliderFac} />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-4 lg:hidden">
            <button aria-label="Previous slide" id="keen-slider-previous" className="rounded-full border border-green-600 p-4 text-green-600 transition hover:bg-green-600 hover:text-white">
              <svg className="size-5 -rotate-180 transform " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
            <button aria-label="Next slide" id="keen-slider-next" className="rounded-full border border-green-600 p-4 text-green-600 transition hover:bg-green-600 hover:text-white">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
        <hr></hr>
      </section>
    </>
  );
};

export default Faces_slider;
