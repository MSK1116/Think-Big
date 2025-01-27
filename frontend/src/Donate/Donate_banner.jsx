import React, { useEffect, useState } from "react";
import { BsBox2HeartFill } from "react-icons/bs";
import { IoQrCode } from "react-icons/io5";
import { FaSearchLocation } from "react-icons/fa";
import QR1 from "../assets/BANK_QR/QR1.jpg";
import { BsFillInfoCircleFill } from "react-icons/bs";
import ModalOwn from "../component/ModalOwn";
import { IoMdCall } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { GiLifeSupport } from "react-icons/gi";
import { FaHandHoldingHeart } from "react-icons/fa";

const Donate_banner = () => {
  const [donationType, setDonationType] = useState(true);
  const [stopView, setStopView] = useState(false);

  const donationBtn = () => {
    setDonationType(!donationType);
  };
  return (
    <>
      <section className=" min-h-screen p-8 mt-8">
        <div className=" relative min-h-screen  w-full">
          <div className=" floating1">
            <BsBox2HeartFill className="  absolute size-14 -rotate-12 opacity-40 z-10 -top-12 left-60 text-red-600 " />
          </div>
          <div className=" w-full flex flex-col md:flex-row mt-8">
            <div className=" w-[55%] flex flex-col items-center  p-4">
              <p className=" mt-10 font-semibold font-playwrite   text-green-800">We rely on your support to bring hope and help to those in need.</p>
              <div className=" relative p-2 shadow-md w-full  rounded-md mt-4">
                <div className=" w-full flex justify-between min-h-7  ">
                  <div className="w-[63%] text-right">Our generous donor</div>
                  <span className="group hover:bg-gray-100 hover:w-44 w-12 transition-all duration-700 flex items-center justify-end rounded-md">
                    <input className=" w-[90%] outline-none rounded  border-l-2 border-t-2 border-b-2  bg-transparent hidden group-hover:block" type="text" />
                    <FaSearch className=" cursor-pointer" />
                  </span>
                </div>
                <div className=" w-full space-y-2 max-h-[23rem] overflow-y-scroll overflow-x-hidden cursor-default">
                  <div className="  shadow-lg p-2 hover:shadow-xl hover:scale-105 transition-all duration-1000 rounded-md flex flex-row min-h-20 max-h-min-h-20 h-full bg-transparent ">
                    <div className=" w-[15%] flex justify-center ">
                      <img className=" object-center mt-2 object-cover rounded-full h-16 w-16  " src="/faces/BB.jpg"></img>
                    </div>
                    <div className=" w-[85%]  p-2">
                      <h1>Manish Singh Mahato</h1>
                      <h2 className=" text-sm text-gray-600"> Kishnapur, Madhesh, Nepal</h2>
                      <h3>Proudly donated us NRP 1,000 to fuel our mission.</h3>
                      <h1 className=" text-right text-gray-500 text-sm">August 24, 2024</h1>
                    </div>
                  </div>
                  <div className=" shadow-lg p-2 hover:shadow-xl hover:scale-105 transition-all duration-1000  rounded-md flex flex-row min-h-20 max-h-min-h-20 h-full bg-transparent ">
                    <div className=" w-[15%] flex justify-center ">
                      <img className=" object-center mt-2 object-cover rounded-full h-16 w-16  " src="/faces/satish.gif"></img>
                    </div>
                    <div className=" w-[85%]  p-2">
                      <h1>Manish Singh Mahato</h1>
                      <h2 className=" text-sm text-gray-600"> Kishnapur, Madhesh, Nepal</h2>
                      <h3>Proudly donated us NRP 1,000 to fuel our mission.</h3>
                      <h1 className=" text-right text-gray-500 text-sm">August 24, 2024</h1>
                    </div>
                  </div>
                  <div className=" shadow-lg p-2 hover:shadow-xl hover:scale-105 transition-all duration-1000  rounded-md flex flex-row min-h-20 max-h-min-h-20 h-full bg-transparent ">
                    <div className=" w-[15%] flex justify-center ">
                      <img className=" object-center mt-2 object-cover rounded-full h-16 w-16  " src="/faces/BPB.jpeg"></img>
                    </div>
                    <div className=" w-[85%]  p-2">
                      <h1>Manish Singh Mahato</h1>
                      <h2 className=" text-sm text-gray-600"> Kishnapur, Madhesh, Nepal</h2>
                      <h3>Proudly donated us NRP 1,000 to fuel our mission.</h3>
                      <h1 className=" text-right text-gray-500 text-sm">August 24, 2024</h1>
                    </div>
                  </div>
                  <div className=" shadow-lg p-2 hover:shadow-xl hover:scale-105 transition-all duration-1000  rounded-md flex flex-row min-h-20 max-h-min-h-20 h-full bg-transparent ">
                    <div className=" w-[15%] flex justify-center ">
                      <img className=" object-center mt-2 object-cover rounded-full h-16 w-16  " src="/faces/MSK.jpg"></img>
                    </div>
                    <div className=" w-[85%]  p-2">
                      <h1>Manish Singh Mahato</h1>
                      <h2 className=" text-sm text-gray-600"> Kishnapur, Madhesh, Nepal</h2>
                      <h3>Proudly donated us NRP 1,000 to fuel our mission.</h3>
                      <h1 className=" text-right text-gray-500 text-sm">August 24, 2024</h1>
                    </div>
                  </div>
                </div>
                <p className=" text-xs text-center mt-1">Your generosity makes a difference! 🙌</p>
              </div>
            </div>
            {/* other half part */}
            <div className=" relative shadow-md w-[45%] p-2 flex  items-center flex-col ">
              <div>
                <span className=" absolute top-10 floating01 -left-0 text-green-600/50  ">
                  <FaHandHoldingHeart className=" size-14 " />
                </span>
              </div>
              <div
                onClick={donationBtn}
                className={` ${
                  donationType ? `after:left-0 after:translate-x-0 after:content-['FUNDS'] after:rounded-l-lg` : `after:translate-x-[50%] after:content-['GOODS'] after:rounded-r-lg`
                }  after:p-2 after:text-center cursor-pointer after:transition-all after:ease-linear after:duration-300 after:w-1/2  after:top-0 after:absolute  after:z-10 after:h-full after:bg-emerald-700 after:text-white relative flex  justify-around bg-gray-100 p-2 rounded-lg text-gray-500 max-w-64 w-full  border-gray-200`}>
                <span>FUNDS</span>

                <span>GOODS</span>
              </div>
              {donationType ? (
                <>
                  <div className=" mt-20 ">
                    <p className=" fade-down flex gap-x-1 items-center justify-center text-center text-sm text-gray-600 ">
                      SCAN <IoQrCode />{" "}
                    </p>
                    <div className=" size-64 zoom-in ">
                      <img src={QR1}></img>
                    </div>
                    <div className="text-center">
                      <p>BANK ACCOUNT: 100200300 </p>
                      <p>IBAN: 1234567890</p>
                      <p>SWIFT: 1234567890</p>
                      <p>Bank: Bank </p>
                    </div>
                    <div className=" absolute  right-1  bottom-1">
                      <ModalOwn
                        text={
                          " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, obcaecati quibusdam! Repellendus soluta reprehenderit natus aliquid facilis mollitia, ipsum quos, exercitationem tempora placeat eveniet. Fuga error dolore iure velit exercitationem."
                        }>
                        <BsFillInfoCircleFill className=" cursor-pointer opacity-50 transition-all duration-700 hover:opacity-100 size-5" />
                      </ModalOwn>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="relative fade-right mt-6 w-full">
                    <p className=" fade-down flex gap-x-1  justify-center items-center text-sm text-gray-600 ">
                      Look for your nearest location and contact
                      <FaSearchLocation />
                    </p>
                    <div className=" text-gray-700  flex w-full">
                      <ol role="list" className="gap-y-3 space-y-7 list-decimal marker:text-green-500 marker:font-playwrite list-inside">
                        <li className={` fade-right  `}>
                          <span className="font-bold uppercase">Koshi Province</span>
                          <ol className="text-sm list-[upper-alpha] list-inside indent-4">
                            <li>
                              <span>Naresh Yadav</span>
                              <span> (Biratnagar, Main Road)</span>
                              <span className="text-gray-500"> Call +977 9812345678</span>
                            </li>
                            <li>
                              <span>Sita Rai</span>
                              <span> (Dharan, College Road)</span>
                              <span className="text-gray-500"> Call +977 9847654321</span>
                            </li>
                          </ol>
                        </li>

                        <li className=" fade-right">
                          <span className="font-bold fade-right delay-75 uppercase">Madhesh Province</span>
                          <ol className="text-sm list-[upper-alpha] list-inside indent-4">
                            <li>
                              <span>Satish Kumar Singh</span>
                              <span> (Janakpur, Railway Station)</span>
                              <span className="text-gray-500"> Call +977 9801234567</span>
                            </li>
                            <li>
                              <span>Ramesh Mahato</span>
                              <span> (Birgunj, Ghantaghar)</span>
                              <span className="text-gray-500"> Call +977 9823456789</span>
                            </li>
                          </ol>
                        </li>

                        <li className=" fade-right">
                          <span className="font-bold uppercase">Bagmati Province</span>
                          <ol className="text-sm list-[upper-alpha] list-inside indent-4">
                            <li>
                              <span>Shalikram Jamkattel</span>
                              <span> (Kathmandu, New Baneshwor)</span>
                              <span className="text-gray-500"> Call +977 9811122334</span>
                            </li>
                            <li>
                              <span>Pratiksha Shrestha</span>
                              <span> (Lalitpur, Pulchowk)</span>
                              <span className="text-gray-500"> Call +977 9865543210</span>
                            </li>
                          </ol>
                        </li>

                        <li className=" fade-right">
                          <span className="font-bold uppercase">Gandaki Province</span>
                          <ol className="text-sm list-[upper-alpha] list-inside indent-4">
                            <li>
                              <span>Surendra Raj Pandey</span>
                              <span> (Pokhara, Lakeside)</span>
                              <span className="text-gray-500"> Call +977 9841122334</span>
                            </li>
                            <li>
                              <span>Dipak Gurung</span>
                              <span> (Gorkha, Barpak)</span>
                              <span className="text-gray-500"> Call +977 9854433221</span>
                            </li>
                          </ol>
                        </li>

                        <li className=" fade-right">
                          <span className="font-bold uppercase">Lumbini Province</span>
                          <ol className="text-sm list-[upper-alpha] list-inside indent-4">
                            <li>
                              <span>Dilli Bahadur Chaudhary</span>
                              <span> (Butwal, Traffic Chowk)</span>
                              <span className="text-gray-500"> Call +977 9805566778</span>
                            </li>
                            <li>
                              <span>Aarati Thapa</span>
                              <span> (Kapilvastu, Tilaurakot)</span>
                              <span className="text-gray-500"> Call +977 9823344556</span>
                            </li>
                          </ol>
                        </li>

                        <li className=" fade-right">
                          <span className="font-bold uppercase">Karnali Province</span>
                          <ol className="text-sm list-[upper-alpha] list-inside indent-4">
                            <li>
                              <span>Raj Kumar Sharma</span>
                              <span> (Surkhet, Birendranagar)</span>
                              <span className="text-gray-500"> Call +977 9810099887</span>
                            </li>
                            <li>
                              <span>Krishna Bhandari</span>
                              <span> (Jumla, Khalanga)</span>
                              <span className="text-gray-500"> Call +977 9846655443</span>
                            </li>
                          </ol>
                        </li>

                        <li className=" fade-right">
                          <span className="font-bold uppercase">Sudurpashchim Province</span>
                          <ol className="text-sm list-[upper-alpha] list-inside indent-4">
                            <li>
                              <span>Kamal Bahadur Shah</span>
                              <span> (Dhangadhi, Campus Road)</span>
                              <span className="text-gray-500"> Call +977 9812348765</span>
                            </li>
                            <li>
                              <span>Purnima Rawat</span>
                              <span> (Baitadi, Dasharathchand)</span>
                              <span className="text-gray-500"> Call +977 9807766554</span>
                            </li>
                          </ol>
                        </li>
                      </ol>
                    </div>
                    <div className=" absolute  right-1  bottom-0">
                      <ModalOwn
                        text={
                          " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, obcaecati quibusdam! Repellendus soluta reprehenderit natus aliquid facilis mollitia, ipsum quos, exercitationem tempora placeat eveniet. Fuga error dolore iure velit exercitationem."
                        }>
                        <BsFillInfoCircleFill className=" cursor-pointer  opacity-50 transition-all duration-700 hover:opacity-100 size-5" />
                      </ModalOwn>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <hr></hr>
      </section>
    </>
  );
};

export default Donate_banner;
