import React from "react";
import logo from "/Logo_noBg.png";
import { Link } from "react-router-dom";

import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <footer className="bg-gray-100">
        <div className="relative mx-auto max-w-screen-xl p-8 ">
          <div className="lg:flex space-y-7 lg:items-end lg:justify-between">
            <div data-aos="zoom-in" className=" md:text-left text-center  flex flex-col md:items-start items-center">
              <img className="h-20 w-20" src={logo}></img>
              <p className=" text-green-600 leading-relaxed  ">
                Think Big<br></br>Dhanusha, Nepal{" "}
              </p>{" "}
              <p>Regd. No. 3435/080/081 </p>
            </div>
            <div className="flex flex-col space-y-5">
              <ul data-aos="fade-up" className=" flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
                <li>
                  <a target="blank" className="text-gray-700 transition hover:text-gray-700/75" href="https://www.facebook.com/thinkbigbig18">
                    <FaFacebook className="h-8 w-8" />
                  </a>
                </li>

                <li>
                  <a target="blank" className="text-gray-700 transition hover:text-gray-700/75" href="#">
                    <FaInstagramSquare className="h-8 w-8" />
                  </a>
                </li>

                <li>
                  <Link to={"/contact"} className="text-gray-700 transition hover:text-gray-700/75" href="#">
                    <FaXTwitter className="h-8 w-8" />
                  </Link>
                </li>

                <li>
                  <Link to={"/giveus"} className="text-gray-700 transition hover:text-gray-700/75" href="#">
                    <FaYoutube className="h-8 w-8" />
                  </Link>
                </li>
              </ul>
              <ul data-aos="fade-up" data-aos-offset="50" data-aos-delay="100" className=" flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
                <li>
                  <a target="blank" className="text-gray-700 transition hover:text-gray-700/75" href="#">
                    About{" "}
                  </a>
                </li>

                <li>
                  <a onClick={() => navigate("/faq")} className="text-gray-700 transition hover:text-gray-700/75" href="#">
                    FAQ{" "}
                  </a>
                </li>

                <li>
                  <Link to={"/contact"} className="text-gray-700 transition hover:text-gray-700/75" href="#">
                    {" "}
                    Contact{" "}
                  </Link>
                </li>

                <li>
                  <Link to={"/giveus"} className="text-gray-700 transition hover:text-gray-700/75" href="#">
                    {" "}
                    Donate{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row space-x-4 w-full justify-end">
            <div data-aos="fade-up" data-aos-offset="50" data-aos-delay="100" className="mt-6 gap-1 text-center flex flex-col md:flex-row  text-sm text-gray-500 md:text-left">
              Crafted by:
              <a className="font-bold text-nowrap" target="blank" href="https://www.manishmahato.info.np/">
                Manish Singh Mahato
              </a>
            </div>
            <p data-aos="fade-up" data-aos-offset="50" data-aos-delay="200" className="mt-6 text-center text-sm text-gray-500 lg:text-right">
              Copyright &copy; 2024. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
