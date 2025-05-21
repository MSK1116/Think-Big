import React, { useEffect, useState } from "react";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Aos from "aos";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdOutlineMessage } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();
  const [alertEventToggle, setAlertEventToggle] = useState(true);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    if (getEventToogleCookie()) {
      setAlertEventToggle(false);
      return;
    }
    const timer = setTimeout(() => {
      handleEventToogle();
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  const handleEventToogle = () => {
    setAlertEventToggle(false);
    setEventToogleCookie();
  };

  const getEventToogleCookie = () => {
    const allcookies = document.cookie.split("; ");
    if (allcookies) {
      const parsedData = Object.fromEntries(allcookies.map((item) => item.split("=")));
      if (parsedData.EventToogle == "closed") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const setEventToogleCookie = () => {
    const expires = new Date();
    expires.setDate(expires.getDate() + 3);
    document.cookie = `EventToogle=closed;expires=${expires.toDateString()};path=/`;
  };

  const location = useLocation();
  const navItems = (
    <>
      <Link to="/">
        <li
          className={` relative hover:after:w-full  ${
            location.pathname == "/" ? " text-green-600 after:w-full   " : ""
          } active:-translate-y-[1px] after:content-[''] after:absolute after:h-1 after:w-0 after:top-full after:transition-all after:origin-left after:duration-1000  after:bg-green-600 after:rounded-md  `}>
          Home
        </li>
      </Link>
      <Link to="/2025">
        <li
          className={` relative hover:after:w-full  ${
            location.pathname == "/2025" ? " text-green-600 after:w-full  " : ""
          } active:-translate-y-[1px]  after:content-[''] after:absolute after:h-1 after:w-0 after:top-full after:transition-all after:origin-left after:duration-1000  after:bg-green-600 after:rounded-md  `}>
          In 2025
        </li>
      </Link>
      <Link to="/member">
        <li
          className={` relative hover:after:w-full  ${
            location.pathname == "/member" ? " text-green-600 after:w-full   " : ""
          } active:-translate-y-[1px]  after:content-[''] after:absolute after:h-1 after:w-0 after:top-full after:transition-all after:origin-left after:duration-1000  after:bg-green-600 after:rounded-md  `}>
          Faces
        </li>
      </Link>
      <Link to="/event">
        <li
          className={` relative hover:after:w-full  ${
            location.pathname == "/event" ? " text-green-600 after:w-full   " : ""
          } active:-translate-y-[1px]  after:content-[''] after:absolute after:h-1 after:w-0 after:top-full after:transition-all after:origin-left after:duration-1000  after:bg-green-600 after:rounded-md  `}>
          Events
        </li>
      </Link>
      <Link to="/about">
        <li
          className={` relative hover:after:w-full  ${
            location.pathname == "/about" ? " text-green-600 after:w-full   " : ""
          } active:-translate-y-[1px]  after:content-[''] after:absolute after:h-1 after:w-0 after:top-full after:transition-all after:origin-left after:duration-1000  after:bg-green-600 after:rounded-md  `}>
          About
        </li>
      </Link>
      <Link to={"/giveus"}>
        <li
          className={` relative hover:after:w-full  ${
            location.pathname == "/giveus" ? " text-green-600 after:w-full   " : ""
          } active:-translate-y-[1px]  after:content-[''] after:absolute after:h-1 after:w-0 after:top-full after:transition-all after:origin-left after:duration-1000  after:bg-green-600 after:rounded-md  `}>
          Donate
        </li>
      </Link>
    </>
  );

  return (
    <>
      <div data-aos="fade-down" data-aso-offset="100" className=" flex flex-col fixed top-0 left-0 right-0 z-50">
        {alertEventToggle && (
          <div className=" fade-down flex items-center justify-between gap-4 bg-gradient-to-b from-emerald-700 to-emerald-600 px-4 py-2 text-white">
            <p className="md:text-sm text-xs font-medium cursor-default">
              Want to tackle or help others with mental illness?{" "}
              <span
                onClick={() => {
                  navigate("/event");
                  handleEventToogle();
                }}
                className=" underline cursor-pointer">
                Register for Mental Health Program (Episode: 4)
              </span>
            </p>

            <button onClick={handleEventToogle} aria-label="Dismiss" className="shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-black/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
        {/* banner end */}
        <div className={`  transition-all duration-500 max-w-screen-2xl shadow-md container mx-auto md:px-20px navbar bg-slate-200 ${sticky ? " bg-slate-300  shadow-xl " : ""} `}>
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
              <ul tabIndex={0} className="menu menu-sm gap-2 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box min-w-56 w-full">
                {navItems}
                <Link to={"/apply"}>
                  <li>Application</li>
                </Link>
                <Link to={"/faq"}>
                  <li>FAQ</li>
                </Link>
                <Link to={"/contact"}>
                  <li>Contact</li>
                </Link>
                <Link to={"/about"}>
                  <li>About</li>
                </Link>
                {/* mobile nav ends */}
              </ul>
            </div>

            <div className="navbar-center hidden mr-5 lg:flex">
              <ul className="menu  space-x-8 menu-horizontal px-1">
                {navItems}
                <div
                  className={` dropdown dropdown-bottom relative hover:after:w-full  ${
                    ["/contact", "/faq"].includes(location.pathname) ? " text-green-600 after:w-full   " : ""
                  } after:content-[''] after:absolute after:h-1 after:w-0 after:top-full after:transition-all after:origin-left after:duration-1000  after:bg-green-600 after:rounded-md  `}>
                  {" "}
                  <div tabIndex={0} role="button" className="active:-translate-y-[1px] ">
                    More
                  </div>
                  <ul tabIndex={0} className="dropdown-content mt-5 menu bg-base-100 rounded-box z-[1] w-40 space-y-2  shadow">
                    <Link to="/apply">
                      <li
                        className={` relative hover:after:w-full hover:shadow-xl  ${
                          location.pathname == "/apply" ? " text-green-600 after:w-full   " : ""
                        } active:-translate-y-[1px]  after:content-[''] after:absolute after:h-1 text-gray-800 p-1 after:w-0 after:top-full after:transition-all after:origin-left after:duration-1000  after:bg-green-600 after:rounded-md  `}>
                        Application
                      </li>
                    </Link>
                    <Link to="/contact">
                      <li
                        className={` relative hover:after:w-full hover:shadow-xl  ${
                          location.pathname == "/contact" ? " text-green-600 after:w-full   " : ""
                        } active:-translate-y-[1px]  after:content-[''] after:absolute after:h-1 text-gray-800 p-1 after:w-0 after:top-full after:transition-all after:origin-left after:duration-1000  after:bg-green-600 after:rounded-md  `}>
                        Contact
                      </li>
                    </Link>
                    <Link to="/faq">
                      <li
                        className={` relative hover:after:w-full hover:shadow-xl  ${
                          location.pathname == "/faq" ? " text-green-600 after:w-full   " : ""
                        } active:-translate-y-[1px]  after:content-[''] after:absolute after:h-1 text-gray-800 p-1 after:w-0 after:top-full after:transition-all after:origin-left after:duration-1000  after:bg-green-600 after:rounded-md  `}>
                        FAQ
                      </li>
                    </Link>
                    {/* pc nav ends */}
                  </ul>
                </div>
              </ul>
            </div>
            <div className="flex-none space-x-4">
              {/* <Notification /> */}
              {/* <Link onClick={() => document.getElementById("my_modal_2").showModal()}>
                <button className=" after:content-['']  hover:after:content-['CALL'] after:text-center after:flex after:justify-center after:items-center after:absolute  after:z-10 after:w-full after:h-full after:scale-x-0 hover:after:scale-x-100 after:origin-left after:rounded-lg after:transition-all after:duration-700 after:ease-out  after:bg-red-600  btn relative  hover:bg-emerald-600 bg-emerald-600  transition-all border-none text-white uppercase font-semibold md:tracking-wide  tracking-normal after:font-semibold after:md:tracking-wide  after:tracking-normal ">
                  In trouble?
                </button>
              </Link> */}
              <button type="button" onClick={() => document.getElementById("my_modal_2").showModal()} className=" group/callBtn overflow-hidden relative bg-emerald-600 rounded-md text-white font-semibold px-3 py-2">
                <div className=" justify-center items-center">
                  <div className=" absolute -translate-x-36 group-hover/callBtn:translate-x-0 transition-all duration-700 flex inset-0 justify-center items-center bg-red-600"> Call</div>
                  <div className="group-hover/callBtn:-translate-x-36  transition-all duration-700">In trouble?</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center uppercase text-green-600">Keep calm!</h3>

            <a href="tel:1098">
              <div className=" flex justify-center rounded-full ">
                <BiSolidPhoneCall className=" animate animate-pulse size-20 text-red-600 p-1 bg-gray-100 rounded-full content-center" />
              </div>
            </a>
            <p className=" text-center text-red-600 mx-auto"> Make a call at CWIN </p>
            <p className=" text-center text-red-600 text-2xl font-bold ">
              <a href="tel:1098">1098</a>
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
      </div>
    </>
  );
};

export default Navbar;
