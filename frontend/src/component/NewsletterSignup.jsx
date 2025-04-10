import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const NewsletterSignup = () => {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const dataToSend = {
      email: data.email,
      date: formattedDateTime,
    };
    const toastId = toast.loading("Subscribing...");
    await axios
      .post("https://think-big-backend.vercel.app/subscribe", dataToSend)
      .then((res) => {
        if (res.data) {
          toast.success(res.data.message, { id: toastId });
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message, { id: toastId });
      });
  };
  return (
    <>
      <div className="  h-12  ">
        <div data-aos="zoom-in-up" data-aos-duration="1000" className="  relative w-full h-full rounded-2xl bg-slate-50  border-2 border-transparent focus-within:border-green-700  ">
          <form className=" rounded-2xl pr-1 py-1 flex items-center w-full h-full" onSubmit={handleSubmit(onSubmit)}>
            {" "}
            <input {...register("email", { required: true })} type="email" data-aos="zoom-in-right" data-aos-duration="1000" className=" bg-slate-50 w-full h-full p-2 rounded-lg outline-none text-green-600 " placeholder=" youremail@mail.com"></input>
            <button type="submit" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300" className=" cursor-pointer px-3 py-2 text-center rounded-r-2xl  bg-emerald-600  text-slate-50 ">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default NewsletterSignup;
