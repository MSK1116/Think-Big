import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUserNinja } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";

const Apply_form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [status, setStatus] = useState({ sending: false, sent: null, failed: null });

  const formSubmit = async (data) => {
    const date = new Date().toUTCString();
    setStatus({ sending: true, sent: false, failed: false });
    const dataToSend = {
      fullName: data.fullName,
      email: data.email,
      address: data.address,
      date: date.toString(),
    };

    try {
      const data = await axios.post("https://think-big-backend.vercel.app/apply", dataToSend);
      if (data) {
        setStatus({ sending: false, sent: true, failed: false });
        reset();
      }
    } catch (error) {
      console.log(error);
      setStatus({ sending: false, sent: false, failed: error?.response?.data?.message || "N/A" });
    }
  };
  return (
    <>
      <span className="flex mb-2 items-center">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-emerald-600"></span>

        <span className="shrink-0 text-xs px-4 text-gray-800/75">Almost there!</span>

        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-emerald-600"></span>
      </span>
      <div className=" max-w-screen-2xl flex relative flex-col md:flex-row w-full md:h-[80vh] h-full  p-8 md:p-5">
        <div className=" absolute w-full h-full inset-0  ">
          <img className=" w-full h-full  object-cover object-right" src="\webi\Reading on black_board.png"></img>
        </div>

        <div className=" z-20 md:w-1/2 w-full order-2 md:order-1 bg-gray-100  shadow-lg  rounded-md">
          <form className="  space-y-3 p-8" onSubmit={handleSubmit(formSubmit)}>
            <h4 className=" text-center text-xl my-3"> Get started with this form!</h4>
            <h5 className=" text-center text-gray-800/75">We will send you email with link to the Google Form</h5>
            <div className=" flex items-center shadow-md rounded-md ">
              <FaUserNinja className=" size-6 mx-1 opacity-85 " />
              <input {...register("fullName", { required: true })} name="fullName" className="w-full p-3 text-emerald-700 rounded-md  outline-none shadow-sm focus:shadow-lg " type="text" placeholder="Your Name" />
              {errors.fullName && <RiErrorWarningLine className=" mx-1 text-red-500" />}
            </div>
            <div className=" flex items-center shadow-md rounded-md ">
              <MdOutlineAlternateEmail className=" size-6 mx-1 opacity-85 " />
              <input {...register("email", { required: true })} name="email" className="w-full p-3 text-emerald-700 rounded-md  outline-none shadow-sm focus:shadow-lg " type="email" placeholder="Your email" />
              {errors.email && <RiErrorWarningLine className=" mx-1 text-red-500" />}
            </div>
            <div className=" flex items-center shadow-md rounded-md ">
              <FaLocationDot className=" size-6 mx-1 opacity-85 " />
              <input {...register("address", { required: true })} name="address" className="w-full p-3 text-emerald-700 rounded-md  outline-none shadow-sm focus:shadow-lg " type="text" placeholder="Your Address" />
              {errors.address && <RiErrorWarningLine className=" mx-1 text-red-500" />}
            </div>
            <div className=" flex  items-center  rounded-md space-x-2  ">
              <input {...register("consent", { required: true })} type="checkbox" className="checkbox mt-8  border-1 border-emerald-600 checked:border-emerald-800 checked:bg-emerald-700 checked:text-gray-50" />
              <span className=" text-sm mt-8">I have read and commit to completing the application.</span> {errors.consent && <RiErrorWarningLine className=" mx-1 mt-8 text-red-500" />}
            </div>
            <div className=" w-full flex items-center justify-center mt-10">
              <button disabled={status.sending} className=" overflow-hidden flex space-x-2 bg-emerald-600   px-4 py-2 rounded-md group/download-btn  relative" type="submit">
                {!status.sending && (
                  <>
                    <div className=" justify-center size-full">
                      <h4 className=" group-hover/download-btn:translate-x-40 text-sm text-white transition-all duration-700">Submit</h4>
                      <div className=" -translate-x-32 group-hover/download-btn:translate-x-0 absolute flex inset-0  items-center justify-center z-10 transition-all duration-500">➡️</div>
                    </div>
                  </>
                )}
                {status.sending && (
                  <>
                    <div className=" justify-center size-full">
                      <h4 className=" group-hover/download-btn:translate-x-40 text-sm text-white transition-all duration-700">Submitting...</h4>
                      <div className=" -translate-x-32 group-hover/download-btn:translate-x-0 absolute flex inset-0  items-center justify-center z-10 transition-all duration-500">➡️</div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full size-4 border border-gray-100 border-t-transparent"></div>
                    </div>
                  </>
                )}
              </button>
            </div>
            <div className=" text-center">
              {status.sent && <span className=" text-sm text-emerald-600">Check your email!</span>} {status.failed && <span className=" text-sm text-red-600">{status.failed} </span>}
            </div>
          </form>
        </div>
        <div className=" md:w-1/2  w-full  order-1 flex justify-center items-center p-6 z-10 md:order-2">
          <div className="p-6 size-fit md:text-3xl text-2xl rounded-md bg-gray-300/75 flex justify-center items-center font-extrabold text-center text-gray-50">Think Big is committed to making education accessible.</div>
        </div>
      </div>
    </>
  );
};

export default Apply_form;
