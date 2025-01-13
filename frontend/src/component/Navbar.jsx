import React, { useEffect } from "react";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Aos from "aos";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdOutlineMessage } from "react-icons/md";

const Navbar = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  const navItems = (
    <>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/2025">
        <li>In 2025</li>
      </Link>
      <Link to="/member">
        <li>Faces</li>
      </Link>
      <Link to="/event">
        <li>Events</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
      <Link to={"/giveus"}>
        <li>Donate</li>
      </Link>
    </>
  );
  return (
    <>
      <div data-aos="fade-down" className="max-w-screen-2xl fixed top-0 left-0 right-0 z-50 container mx-auto md:px-20px navbar bg-gray-200">
        <div className="flex-1">
          <Link to={"/"}>
            {" "}
            <span className=" text-green-600 btn btn-ghost text-xl">Think Big</span>
          </Link>
        </div>
        <div className=" ">
          <div className="dropdown order-2 md:order-1">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm gap-2 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
              <Link to={"/faq"}>
                <li>FAQ</li>
              </Link>
              <Link to={"/contact"}>
                <li>Contact</li>
              </Link>
              <Link to={"/about"}>
                <li>About</li>
              </Link>
              <Link to={"/2025"}>
                <li>In 2025</li>
              </Link>
            </ul>
          </div>

          <div className="navbar-center hidden mr-5 lg:flex">
            <ul className="menu  space-x-8 menu-horizontal px-1">{navItems}</ul>
          </div>
          <div className="flex-none space-x-4">
            {/* <Notification /> */}
            <Link onClick={() => document.getElementById("my_modal_2").showModal()}>
              <button className="btn  bg-emerald-600 hover:bg-emerald-700 transition-all border-none text-white uppercase font-semibold md:tracking-wide tracking-normal "> In trouble?</button>
            </Link>
          </div>
        </div>
      </div>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center uppercase text-green-600">Keep calm!</h3>

          <a href="callto:1098">
            <div className=" flex justify-center rounded-full ">
              <BiSolidPhoneCall className=" animate animate-pulse size-20 text-red-600 p-1 bg-gray-100 rounded-full content-center" />
            </div>
          </a>
          <p className=" text-center text-red-600 mx-auto"> Make a call at CWIN </p>
          <p className=" text-center text-red-600 text-2xl font-bold ">
            <a href="callto:1098">1098</a>
          </p>
          <p className=" text-red-600 text-center ">or leave us message at</p>
          <p className=" flex justify-center">
            <Link to={"/contact"}>
              {" "}
              <MdOutlineMessage className="size-8 text-red-600 rounded-full p-1 bg-gray-100 " />{" "}
            </Link>
          </p>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Navbar;
