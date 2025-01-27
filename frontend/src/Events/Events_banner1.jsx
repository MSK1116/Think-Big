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
  const eventName = "Webinar on mental health";
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
            toast.error("Confirmation email" + res.data.emailStatus);
          }
          setRegStart(false);
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
          <div className=" flex flex-col justify-start max-w-xl text-center ltr:sm:text-left rtl:sm:text-right ">
            <h1 data-aos="fade-down" className="text-3xl font-bold text-left text-green-600 mb-4">
              Events
            </h1>

            <p data-aos="fade-down" data-aos-delay="100" className=" text-gray-500 md:mt-4 text-sm md:text-[0.875rem]  md:block">
              At Think Big, we do more than just host events—we create transformative experiences that inspire change. Our programs are designed to ignite curiosity, foster collaboration, and empower every participant to turn their ideas into action.
              In addition to providing mentorship, we focus on critical social issues like child marriage and child labor, working actively to raise awareness and rescue affected children. Through hands-on workshops, insightful talks, and networking
              opportunities, we build a community where innovation thrives. Join us in our mission to inspire, make a difference, and create a better future together.
            </p>

            <div className="mt-4 md:mt-8">
              <button
                onClick={formVisibility}
                disabled={true}
                className={` ${
                  !registerForm ? " after:scale-x-100  " : " "
                } relative cursor-not-allowed  after:transition-all after:flex after:items-center after:justify-center after:origin-left after:duration-700 after:ease-in-out  after:absolute after:top-0 after:right-0 after:rounded after:z-10 after:content-['Fill_the_form'] after:h-full after:w-full after:scale-x-0 after:bg-red-600 hover:after:bg-red-700 inline-block rounded bg-emerald-600 px-12 py-3   text-sm font-medium text-white transition-all hover:bg-emerald-700 outline-none `}>
                Register
              </button>
            </div>
          </div>
        </div>
        {registerForm ? (
          <>
            <div className=" h-full w-full ">
              <div className=" fade-right shadow-md  bg-[url(/webi/handprint.jpg)] bg-cover  object-cover  sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]">
                <div className="   bg-black/50 h-full w-full flex items-center sm:self-end sm:rounded-ss-[30px]  md:rounded-ss-[60px]  ">
                  <h1 className="text-gray-100 font-bold  mx-auto text-center ">Webinar on mental helath will be held this week. Stay tuned till we open registeration</h1>
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
