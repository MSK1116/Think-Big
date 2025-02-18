import React, { useState } from "react";
import AOS from "aos";
import { CgRename } from "react-icons/cg";
import { MdAlternateEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { TiMessageTyping } from "react-icons/ti";
import { useForm } from "react-hook-form";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaUserNinja } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { MdEventAvailable } from "react-icons/md";
import { MdEmojiEvents } from "react-icons/md";
import { FaSnowboarding } from "react-icons/fa";
import { MdElderly } from "react-icons/md";

const Events_banner1 = () => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = now.getFullYear();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // If hour is 0, make it 12
  const formattedDateTime = `${month}/${day}/${year} ${hours}:${minutes} ${ampm}`;

  const RandomIDforModal = Math.random();
  const [registerForm, setRegisterForm] = useState(true);
  const [regStart, setRegStart] = useState(false);
  const [isEmail, setIsEmail] = useState(false);

  const formVisibility = () => {
    setRegisterForm(!registerForm);
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const eventName = "Webinar on Mental Health";
  const onSubmit = async (data) => {
    const applicant = {
      eventName: eventName,
      Fullname: data.Fullname,
      email: data.email,
      address: data.address,
      textarea: data.textarea,
      date: formattedDateTime,
    };
    console.log(applicant);
    const toastId = toast.loading("Registering...");
    setRegStart(true);
    await axios
      .post("https://think-big-backend.vercel.app/eventReg", applicant)
      .then((res) => {
        if (res.data) {
          toast.success(res.data.message, { id: toastId });
          if (res.data.emailStatus === "sent") {
            setIsEmail(true);
            toast.success("Confirmation email" + res.data.emailStatus);
          } else {
            toast.success("Confirmation email" + res.data.emailStatus);
          }
          setRegStart(false);
          setRegisterForm(true);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("ERROR: " + err.response.data.message, { id: toastId });
          setRegStart(false);
        }
      });
  };

  return (
    <>
      <section data-aos="fade-zoom-out" data-aos-duration="1000" className="overflow-hidden mt-28   sm:grid sm:grid-cols-2 sm:items-center">
        <div className="md:p-8 p-3  md:h-[80vh] h-full ">
          <div className=" relative flex flex-col justify-start max-w-xl text-center ltr:sm:text-left rtl:sm:text-right ">
            <div className=" hidden md:block">
              <span className=" floating01 absolute top-32 -left-12 -z-10  text-emerald-700/20 ">
                <MdEventAvailable className=" size-16" />
              </span>
              <span className=" floating02 absolute top-5 -right-14 -z-10 text-emerald-700/20 ">
                <MdEmojiEvents className=" size-16" />
              </span>
              <span className=" floating03 absolute -bottom-20 left-0 -z-10 text-emerald-700/20 ">
                <MdElderly className="size-16" />
              </span>
            </div>

            <h1 data-aos="fade-down" className="text-3xl font-bold text-left text-green-600 mb-4">
              Events
            </h1>

            <div data-aos="fade-down" data-aos-delay="100" className=" text-gray-500 md:mt-4  md:text-[0.875rem]  md:block">
              <h1 className=" text-xl uppercase font-semibold">
                Mental Health Program<hr></hr>
              </h1>
              <ul className="ml-10 text-left list-disc">
                <li>
                  <strong>Duration:</strong> One hour (1 hr)
                </li>
                <li>
                  <strong>Total episodes:</strong> 6 (starting from February 22nd, 2025 )
                </li>
                <li>
                  <strong>Gap between episodes:</strong> 24 hrs, or announced at end of each episode.
                </li>
                <li>
                  <strong>Speaker:</strong> Dr. Santosh Shah (Medical Officer, Patan Hospital)
                </li>
                <li>
                  <strong>Topics: Mental Issues</strong>
                  <ul className="ml-5 list-decimal">
                    <li>Types</li>
                    <li>Causes</li>
                    <li>Preventions</li>
                    <li>Mental exercise lessons - Meditation and Yoga</li>
                  </ul>
                </li>
                <li>
                  <strong>Target audience:</strong> All ages
                </li>
                <li>
                  <strong>Platform:</strong> Online (Meet)
                </li>
                <li>
                  <strong>Fee:</strong> No cost
                </li>
              </ul>
            </div>

            <div className="mt-4 md:mt-8">
              <button
                onClick={formVisibility}
                disabled={false}
                className={` ${
                  !registerForm ? " after:scale-x-100  " : " "
                } relative cursor-pointer after:transition-all after:flex after:items-center after:justify-center after:origin-left after:duration-700 after:ease-in-out  after:absolute after:top-0 after:right-0 after:rounded after:z-10 after:content-['Fill_the_form'] after:h-full after:w-full after:scale-x-0 after:bg-red-600 hover:after:bg-red-700 inline-block rounded bg-emerald-600 px-12 py-3   text-sm font-medium text-white transition-all hover:bg-emerald-700 outline-none `}>
                Register
              </button>
            </div>
          </div>
        </div>
        {registerForm ? (
          <>
            <div className=" h-full w-full min-h-[50vh]">
              {" "}
              <div className=" fade-right shadow-md  bg-[url(/prg/mental_health.png)]  bg-no-repeat bg-center bg-cover min-h-[50vh] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]">
                <div className=" bg-gradient-to-t  from-gray-800/50 hover:opacity-10 transition-all duration-700  to-transparent h-full w-full flex items-end sm:self-end sm:rounded-ss-[30px] min-h-[50vh]  md:rounded-ss-[60px]  ">
                  <h1 className="text-gray-100 font-bold  text-xs md:text-sm mx-1 text-center  ">
                    Mental health program is a six-episode program for people of all ages to learn about mental health. It will cover different types of mental issues like anxiety and depression, their causes, ways to prevent them, and simple
                    exercises like meditation and yoga to keep the mind healthy. Each episode, lasting 40-60 minutes, will provide useful tips and easy methods to improve mental well-being. Whether you want to take care of your own mind or help
                    others, this program will guide you.{" "}
                  </h1>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className=" relative fade-left flex flex-col  items-center  rounded-md shadow-xl w-full h-full    sm:self-end sm:rounded-ss-[30px]  md:rounded-ss-[60px] ">
              <p className=" text-gray-400"> Few more click to do!</p>
              <form onSubmit={handleSubmit(onSubmit)} className=" fade-left mt-4 w-[90%] h-full p-3 space-y-4 flex flex-col">
                <span className=" flex items-center shadow-md rounded-md ">
                  <FaUserNinja className=" size-6 mx-1 opacity-85 " />
                  <input {...register("Fullname", { required: true })} name="Fullname" className="w-full p-3 text-emerald-700 rounded-md  outline-none shadow-sm focus:shadow-lg " type="text" placeholder="Your Name" />
                  {errors.Fullname && <RiErrorWarningLine className=" mx-1 text-red-500" />}
                </span>
                <span className="flex items-center shadow-md rounded-md">
                  <MdAlternateEmail className=" size-6 mx-1 opacity-85 " />
                  <input {...register("email", { required: true })} name="email" className="w-full p-3 text-emerald-700 rounded-md outline-none shadow-sm focus:shadow-lg " type="email" placeholder="Your Email" />
                  {errors.email && <RiErrorWarningLine className=" mx-1 text-red-500" />}{" "}
                </span>
                <span className="flex items-center shadow-md rounded-md">
                  <FaLocationArrow className=" size-6 mx-1 opacity-85 " />
                  <input {...register("address", { required: true })} name="address" className="w-full p-3 text-emerald-700 rounded-md outline-none shadow-sm focus:shadow-lg " type="text" placeholder="Your Address" />
                  {errors.address && <RiErrorWarningLine className=" mx-1 text-red-500" />}{" "}
                </span>
                <span className="flex items-center shadow-md rounded-md">
                  <TiMessageTyping className=" size-6 mx-1 opacity-85 " />
                  <textarea
                    {...register("textarea", { required: true })}
                    name="textarea"
                    className="w-full p-3 text-emerald-700 rounded-md outline-none shadow-sm focus:shadow-lg resize-none  "
                    rows={6}
                    placeholder="Anything you would like to tell us?"></textarea>
                  {errors.textarea && <RiErrorWarningLine className=" mx-1 text-red-500" />}{" "}
                </span>
                <button disabled={regStart} className=" mx-auto text-white rounded-md bg-emerald-700 max-w-24 w-full p-2" type="submit">
                  {" "}
                  Submit
                </button>
              </form>
            </div>
          </>
        )}
      </section>
      <Toaster />
    </>
  );
};

export default Events_banner1;
