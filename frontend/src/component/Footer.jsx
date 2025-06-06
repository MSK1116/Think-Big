import React from "react";
import logo from "/Logo_noBg.png";
import { Link } from "react-router-dom";

import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import NewsletterSignup from "./NewsletterSignup";
import SVGMountainAndTemples from "../svg/SVGMountainAndTemples";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <footer className="bg-gray-200 overflow-hidden relative">
        <div className=" absolute md:right-80 md:top-16 md:size-full -bottom-28 -right-24 size-72   -rotate-[40deg]">
          <img data-aos="zoom-in-left" data-aos-duration="1500" className=" w-full h-full object-contain " src="\webi\slogan_flag.png"></img>
        </div>
        <div
          data-aos-delay="200"
          data-aos-duration="700"
          data-aos-easing="ease-in-out-back"
          data-aos="fade-down"
          data-aos-anchor="#anchorForSVG"
          data-aos-anchor-placement="bottom-bottom"
          className="hidden md:block absolute top-2  right-44  size-fit">
          <SVGMountainAndTemples Hei={65} Wid={300} />
        </div>
        <div className="relative mx-auto max-w-screen-xl p-8">
          <div className="lg:flex space-y-7 lg:items-end lg:justify-between">
            <div data-aos="zoom-in" className=" md:text-left text-center flex flex-col md:items-start items-center">
              <img className="h-20 w-20" src={logo}></img>
              <p className=" text-green-600 leading-relaxed  ">
                Think Big<br></br>Dhanusha, Nepal{" "}
              </p>{" "}
              <p>Regd. No. 3435/080/081 </p>
              <a className=" text-sm" target="blank" href="mailto:contact@thinkbig.org.np">
                contact@thinkbig.org.np
              </a>
            </div>
            <div id="anchorForSVG" className="flex flex-col space-y-5  ">
              <NewsletterSignup />
              <ul data-aos="fade-up" className=" flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
                <li>
                  <a target="blank" className="text-gray-700 transition hover:text-gray-700/75" href="https://www.facebook.com/thinkbigbig18">
                    <FaFacebook className="h-8 w-8" />
                  </a>
                </li>

                <li>
                  <a target="blank" className="text-gray-700 transition hover:text-gray-700/75" href="https://www.linkedin.com/company/think-big-org">
                    <FaLinkedin className="h-8 w-8" />
                  </a>
                </li>

                <li>
                  <Link to={"/contact"} className="text-gray-700 cursor-not-allowed transition hover:text-gray-700/75" href="#">
                    <FaXTwitter className="h-8 w-8" />
                  </Link>
                </li>

                <li>
                  <Link to={"/giveus"} className="text-gray-700 cursor-not-allowed transition hover:text-gray-700/75" href="#">
                    <FaYoutube className="h-8 w-8" />
                  </Link>
                </li>
              </ul>
              <ul data-aos="fade-up" data-aos-offset="10" data-aos-delay="100" className=" flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
                <li>
                  <a onClick={() => navigate("/about")} href="#" className="text-gray-700 transition hover:text-gray-700/75">
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
                <li>
                  <Link to={"/decoder"} className="text-gray-700 transition hover:text-gray-700/75" href="#">
                    {" "}
                    Decoder{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex md:flex-row flex-col  space-x-4 w-full justify-end">
            <div data-aos="fade-up" data-aos-offset="50" data-aos-delay="100" className="mt-6 gap-1 text-center flex flex-col md:flex-row  md:text-sm text-xs items-center text-gray-500 md:text-left">
              Designed with Passion, Perfected with Purpose by
              <a className="font-bold text-nowrap" target="blank" href="https://www.manishmahato.info.np/">
                Manish Singh Mahato
              </a>
              <span className=" hidden md:block">with</span>
              <a className="hidden md:block" target="_blank" href="https://react.dev/">
                <FaReact />
              </a>
            </div>
            <p data-aos="fade-up" data-aos-offset="50" data-aos-delay="200" className="mt-6 text-center text-sm text-gray-500 lg:text-right">
              Copyright &copy; 2025. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
