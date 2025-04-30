import React from "react";

const Apply_timeline = () => {
  return (
    <>
      <div className=" p-8 mb-10 max-w-screen-2xl w-full h-full overflow-hidden">
        <h6 data-aos="fade-down" data-aos-duration="1000" className=" text-xl font-semibold">
          Application timeline:
        </h6>
        <ol className=" mt-9 relative flex flex-col md:flex-row gap-8 md:before:absolute md:before:-mt-px md:before:h-0.5 md:before:w-full md:before:rounded-full md:before:bg-gray-200">
          <div className="md:hidden absolute left-1 w-[2px] h-full bg-gray-200"></div>
          <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="0" className="relative -mt-1.5">
            <span className="block size-3 rounded-full bg-emerald-400"></span>
            <div className="mt-4 md:ml-0 ml-4">
              <time className="text-xs/none font-medium text-gray-700">April 29, 2025</time>

              <h3 className="text-lg font-bold text-gray-900 ">Application start</h3>

              <p className="mt-0.5 text-sm text-gray-700">Start preparing your answer and documents. Submit the above form and we will send you Link to application form.</p>
            </div>{" "}
          </li>

          <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400" className="relative -mt-1.5">
            <span className="block size-3 rounded-full bg-emerald-500"></span>

            <div className="mt-4 md:ml-0 ml-4">
              <time className="text-xs/none font-medium text-gray-700">May 20, 2025</time>

              <h3 className="text-lg font-bold text-gray-900">Application ends</h3>

              <p className="mt-0.5 text-sm text-gray-700">Hope for the best! Your application will be sent to review committee for the review. </p>
            </div>
          </li>

          <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600" className="relative -mt-1.5">
            <span className="block size-3 rounded-full bg-emerald-600"></span>

            <div className="mt-4 md:ml-0 ml-4">
              <time className="text-xs/none font-medium text-gray-700">May 25, 2025</time>

              <h3 className="text-lg font-bold text-gray-900">Gossiping</h3>

              <p className="mt-0.5 text-sm text-gray-700">We will notify all the selected members and will talk for few minutes through Zoom Call and make final decision.</p>
            </div>
          </li>
          <li data-aos-offset="1" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="800" className="relative -mt-1.5">
            <span className="block size-3 rounded-full bg-emerald-700"></span>

            <div className="mt-4 md:ml-0 ml-4">
              <time className="text-xs/none font-medium text-gray-700">May 29, 2025</time>

              <h3 className="text-lg font-bold text-gray-900">Start studying</h3>

              <p className="mt-0.5 text-sm text-gray-700">Further instruction will be provided!</p>
            </div>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Apply_timeline;
