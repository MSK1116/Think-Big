import React from "react";
import { useNavigate } from "react-router-dom";
import school2 from "/webi/school2.jpg";

const ContactBanner1 = () => {
  const navigate = useNavigate();
  return (
    <section className="relative flex mb-48 flex-wrap lg:h-screen min-h-screen p-8 lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold text-green-600 sm:text-3xl">Get in Touch</h1>
          <h2 className="mt-4 text-gray-500">At Think Big, we value your questions, feedback, and ideas. Whether you’re interested in joining our events, learning more about our programs, or simply want to connect, we’re here to help.</h2>
        </div>

        <form action="https://formsubmit.co/contact@thinkbig.org.np" method="POST" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          {/* Name */}
          <input type="hidden" name="_subject" value="Message from website!!"></input>
          <input type="hidden" name="_autoresponse" value="We have received your message. Thank you!"></input>
          <input type="hidden" name="_template" value="table"></input>
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <div className="relative">
              <input name="fullname" required type="text" className="w-full  bg-gray-200 outline-green-500 focus:outline rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm" placeholder="Enter fullname" />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </span>
            </div>
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <input name="email" required type="email" className="w-full rounded-lg outline-green-500 focus:outline bg-gray-200  border-gray-300 p-4 pe-12 text-sm shadow-sm" placeholder="Enter email" />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </span>
            </div>
          </div>
          {/* Phone number */}
          <div>
            <label htmlFor="number" className="sr-only">
              Number
            </label>
            <div className="relative">
              <input name="contact" type="number" className="w-full rounded-lg bg-gray-200 outline-green-500 focus:outline border-gray-300 p-4 pe-12 text-sm shadow-sm" placeholder="Enter contact number" />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </span>
            </div>
          </div>
          {/* Text */}
          <div>
            <label htmlFor="text" className="sr-only">
              Message
            </label>
            <div className="relative">
              <textarea name="message" placeholder="Enter message" rows={5} maxLength={500} className="w-full outline-green-500 focus:outline bg-gray-200 rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm"></textarea>
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Came for event?{" "}
              <button onClick={() => navigate("/event")} className="underline" href="#">
                Events
              </button>
            </p>
            <button type="submit" className="inline-block rounded-lg bg-green-500 px-5 py-3 text-sm font-medium text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className=" rounded-md relative bg-cover bg-[url(/webi/school3.jpg)] h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <div className=" h-full text-center place-content-center rounded-md w-full bg-black/50">
          <h1 className=" text-gray-50 font-bold text-2xl">Inspiring action, empowering futures.</h1>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner1;
