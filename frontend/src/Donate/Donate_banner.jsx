import React, { useEffect, useState } from "react";
import ModalOwn from "../component/ModalOwn";
import QR1 from "../assets/BANK_QR/QR1.jpg";
import { IoQrCode } from "react-icons/io5";

import { BsFillInfoCircleFill, BsBox2HeartFill } from "react-icons/bs";
import { FaHandHoldingHeart, FaSearch, FaSearchLocation } from "react-icons/fa";
import donationList from "./Donation_list.json";

const Donate_banner = () => {
  const [donationType, setDonationType] = useState(true);

  const [searchButton, setSearchButton] = useState(false);
  const [searchFound, setSearchFound] = useState([]);

  const searchDonor = (data) => {
    if (data.length > 2) {
      const filterName = donationList.filter((donationList) => donationList.name.toLowerCase().includes(data.toLowerCase()));
      if (filterName.length > 0) {
        setSearchFound(filterName);
      } else {
        setSearchFound([]);
      }
    } else {
      setSearchFound([]);
    }
  };

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
          <div className=" w-full flex h-full flex-col md:flex-row mt-8">
            <div className=" md:w-[55%] w-full flex  h-[99%] flex-col items-center  md:p-4">
              <h1 className=" mt-10 font-semibold font-playwrite text-center  text-green-800">We rely on your support to bring hope and help to those in need.</h1>
              <div className="  relative p-2 shadow-md w-full  rounded-md mt-4">
                <div className=" w-full flex justify-between min-h-7  ">
                  <h2 className="md:w-[63%] w-[70%] text-right">Our generous donor</h2>
                  <span className={` ${searchButton ? "w-44 ml-2 bg-gray-100" : ""} group w-12 transition-all duration-700 flex items-center justify-end rounded-md `}>
                    <input onChange={(data) => searchDonor(data.target.value)} className={` ${searchButton ? "w-[90%] border-l-2 border-t-2 border-b-2 " : "w-[0%]"} outline-none rounded    bg-transparent group-hover:block `} type="text" />
                    <FaSearch onClick={() => setSearchButton(!searchButton)} className=" cursor-pointer" />
                  </span>
                </div>{" "}
                <div className=" w-full space-y-2 max-h-[21.8rem] min-h-[21.8rem] overflow-y-scroll overflow-x-hidden cursor-default">
                  {searchFound.length > 0
                    ? searchFound.map((data) => (
                        <div key={data.id} className="  shadow-lg p-2 hover:shadow-xl hover:scale-105 transition-all duration-1000 rounded-md flex flex-row min-h-20 max-h-min-h-20 h-full bg-transparent ">
                          <div className=" w-[15%] flex justify-center ">
                            <img className=" object-center mt-2 object-cover rounded-full h-11 w-11 md:h-16 md:w-16  " alt={data.name} src={data.photo_link}></img>
                          </div>
                          <div className=" w-[85%] p-1 md:p-2">
                            <h1 className=" ">{data.name}</h1>
                            <h2 className=" text-xs md:text-sm text-gray-600"> {data.address}</h2>
                            <h3>{data.description}</h3>
                            <h1 className=" text-right text-gray-500 md:text-sm text-xs ">{data.date}</h1>
                          </div>
                        </div>
                      ))
                    : donationList.map((data) => (
                        <div key={data.id} className="  shadow-lg p-2 hover:shadow-xl hover:scale-105 transition-all duration-1000 rounded-md flex flex-row min-h-20 max-h-min-h-20 h-full bg-transparent ">
                          <div className=" w-[15%] flex justify-center ">
                            <img className=" object-center mt-2 object-cover rounded-full h-11 w-11 md:h-16 md:w-16  " alt={data.name} src={data.photo_link}></img>
                          </div>
                          <div className=" w-[85%] p-1 md:p-2">
                            <h1 className=" ">{data.name}</h1>
                            <h2 className=" text-xs md:text-sm text-gray-600"> {data.address}</h2>
                            <h3>{data.description}</h3>
                            <h1 className=" text-right text-gray-500 md:text-sm text-xs ">{data.date}</h1>
                          </div>
                        </div>
                      ))}
                </div>
                <p className=" text-xs  text-center mt-1">Your generosity makes a difference! 🙌</p>
              </div>
            </div>
            {/* other half part */}
            <div className=" relative shadow-md h-[99%] w-full mt-4 md:mt-0  md:w-[45%] p-2 flex  items-center flex-col ">
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
                    <div className=" size-64 zoom-in relative ">
                      <div className=" absolute inset-0 w-full h-full top-0 text-center z-10 text-red-600 flex justify-center items-center bg-gray-700/40">QR not available</div>
                      <img className="opacity-50 cursor-not-allowed" src={QR1}></img>
                    </div>
                    <div className="text-center">
                      <p>BANK ACCOUNT: 1220100026967001 </p>
                      <p>SWIFT: RBBANPKA</p>
                      <p>
                        Bank: Rastriya Banijya Bank<br></br> Bhanuchowk, Janakpur Branch{" "}
                      </p>
                    </div>
                    <div className=" absolute  right-1  bottom-1">
                      <ModalOwn text={"Please use QR code to donate us funds when it is available, for now you can use these given details to deposit the fund."}>
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
                              <span>Peshal Parajuli</span>
                              <span> (Jhapa)</span>
                              <span className="text-gray-500"> Call +977 9848284634</span>
                            </li>
                          </ol>
                        </li>

                        <li className=" fade-right">
                          <span className="font-bold fade-right delay-75 uppercase">Madhesh Province</span>
                          <ol className="text-sm list-[upper-alpha] list-inside indent-4">
                            <li>
                              <span>Gobin Yadav </span>
                              <span> (Dharapani, Dhanusha )</span>
                              <span className="text-gray-500"> Call +977 9801234567</span>
                            </li>
                            <li>
                              <span>Ram Julum Yadav</span>
                              <span> (Tara-Patti, Sirsiya )</span>
                              <span className="text-gray-500"> Call +977 9706666497</span>
                            </li>
                            <li>
                              <span>Saroj Sah</span>
                              <span> (Dadatol, Maisthan )</span>
                              <span className="text-gray-500"> Call +977 9706666497</span>
                            </li>
                            <li>
                              <span>Santosh Shah</span>
                              <span> (Brindawan MNCP, Rautahat )</span>
                              <span className="text-gray-500"> Call +977 9763431243</span>
                            </li>
                          </ol>
                        </li>

                        <li className=" fade-right">
                          <span className="font-bold uppercase">Bagmati Province</span>
                          <ol className="text-sm list-[upper-alpha] list-inside indent-4">
                            <li>
                              <span>Prajwal Jung Thapa</span>
                              <span> (Kathmandu)</span>
                              <span className="text-gray-500"> Call +977 9860062697</span>
                            </li>
                            <li>
                              <span>Nandini Karna</span>
                              <span> (Lalitpur)</span>
                              <span className="text-gray-500"> Call +977 9866041644</span>
                            </li>
                            <li>
                              <span>Sagar Dhakal</span>
                              <span> (Chabahil-7, Kathmandu )</span>
                              <span className="text-gray-500"> Call +977 9840089996</span>
                            </li>
                          </ol>
                        </li>

                        <li className=" fade-right">
                          <span className="font-bold uppercase">Gandaki Province</span>
                          <ol className="text-sm list-[upper-alpha] list-inside indent-4">
                            <li>
                              {/* <span>Surendra Raj Pandey</span>
                              <span> (Pokhara, Lakeside)</span>
                              <span className="text-gray-500"> Call +977 9841122334</span> */}
                              NA
                            </li>
                          </ol>
                        </li>

                        <li className=" fade-right">
                          <span className="font-bold uppercase">Lumbini Province</span>
                          <ol className="text-sm list-[upper-alpha] list-inside indent-4">
                            <li>
                              <span>Nischal Shrestha </span>
                              <span> (Sandhikharka-12, Arghakhanchi )</span>
                              <span className="text-gray-500"> Call +977 9766265376</span>
                            </li>
                          </ol>
                        </li>

                        <li className=" fade-right">
                          <span className="font-bold uppercase">Karnali Province</span>
                          <ol className="text-sm list-[upper-alpha] list-inside indent-4">
                            <li>
                              {/* <span>Raj Kumar Sharma</span>
                              <span> (Surkhet, Birendranagar)</span>
                              <span className="text-gray-500"> Call +977 9810099887</span> */}
                              NA
                            </li>
                          </ol>
                        </li>

                        <li className=" fade-right">
                          <span className="font-bold uppercase">Sudurpashchim Province</span>
                          <ol className="text-sm list-[upper-alpha] list-inside indent-4">
                            <li>
                              {/* <span>Kamal Bahadur Shah</span>
                              <span> (Dhangadhi, Campus Road)</span>
                              <span className="text-gray-500"> Call +977 9812348765</span> */}
                              NA
                            </li>
                          </ol>
                        </li>
                      </ol>
                    </div>
                    <div className=" absolute  right-1  bottom-0">
                      <ModalOwn text={"The list you see are the BOD's of Think Big Org and trusted volunteer across the country. You may donate us by sending goods to the nearest receiver."}>
                        <BsFillInfoCircleFill className=" cursor-pointer  opacity-50 transition-all duration-700 hover:opacity-100 size-5" />
                      </ModalOwn>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donate_banner;
