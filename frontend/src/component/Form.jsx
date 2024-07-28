import React, { useEffect } from "react";

const Form = () => {
  useEffect(() => {
    const dateInput = document.getElementById("dateInput");
    if (dateInput) {
      dateInput.placeholder = "DOB";
    }
  }, []);

  return (
    <>
      <section className=" max-w-full p-3  mb-10 relative flex flex-wrap md:mb-52 lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Motivational Event
              <br></br>
              <span className="text-sm">Speaker: Rahul Adhikari</span>
              <br></br>Reserve Now!
            </h1>

            <p className="mt-4 text-gray-500">
              Our program aims to inspire and guide students in grade 12 and below to explore educational and career opportunities beyond their standard school curriculum. Through workshops, mentorship, and interactive learning experiences, we seek
              to broaden their horizons, ignite their passions, and equip them with the knowledge and skills necessary for a successful future. By connecting them with professionals, university faculty, and senior students, we will provide valuable
              insights and hands-on experiences that encourage them to dream big and achieve their full potential.
            </p>
          </div>

          <form action="https://formsubmit.co/contact@msmahato.com.np" method="POST" className="mx-auto mb-10 mt-8 max-w-md space-y-4">
            <input type="hidden" name="_cc" value="thinkbigbig18@gmail.com"></input>
            <input type="hidden" name="_template" value="table"></input>
            <input type="hidden" name="_subject" value="New submission from TB!"></input>
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>

              <div className="relative">
                <input required name="fullname" type="text" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter fullname" />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="garde&scl" className="sr-only">
                Adress
              </label>

              <div className="relative">
                <input required name="address" type="text" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter Address" />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="contact" className="sr-only">
                Contact
              </label>

              <div className="relative">
                <input required name="number" type="number" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Phone Number" />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="grade&scl" className="sr-only">
                grade and school
              </label>

              <div className="relative">
                <input required name="School_&_Grade" type="text" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Grade & School (for eg: +2, CCRC) " />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="date" className="">
                DOB
              </label>

              <div className="relative">
                <input required name="DOB" type="date" id="dateInput" className="w-full rounded-lg border-gray-200 p-4  text-sm shadow-sm" placeholder="Enter password" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <a className=" cursor-pointer">
                <p className="text-sm gap-x-6 space-x-3 text-gray-500">Read More</p>
              </a>
              <button type="submit" className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img alt="" src="https://th.bing.com/th/id/OIG2.wVyHRtvf7cPpvx7Fej5b?pid=ImgGn" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </section>
    </>
  );
};

export default Form;
