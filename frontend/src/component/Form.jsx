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
      <section className="relative flex flex-wrap  mb-40 lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Reserve Now!</h1>

            <p className="mt-4 text-gray-500">
              Our program aims to inspire and guide students in grade 12 and below to explore educational and career opportunities beyond their standard school curriculum. Through workshops, mentorship, and interactive learning experiences, we seek
              to broaden their horizons, ignite their passions, and equip them with the knowledge and skills necessary for a successful future. By connecting them with professionals, university faculty, and senior students, we will provide valuable
              insights and hands-on experiences that encourage them to dream big and achieve their full potential.
            </p>
          </div>

          <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>

              <div className="relative">
                <input type="text" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter fullname" />

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
                <input type="text" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter Address" />

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
                <input type="number" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Phone Number" />

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
                <input type="date" id="dateInput" className="w-full rounded-lg border-gray-200 p-4  text-sm shadow-sm" placeholder="Enter password" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                No account?
                <a className="underline" href="#">
                  Sign up
                </a>
              </p>

              <button type="submit" className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">
                Sign in
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img alt="" src="https://i.postimg.cc/qvqSSngD/1097ede3-f292-42c9-bd9f-b60360993dc3.jpg" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </section>
    </>
  );
};

export default Form;