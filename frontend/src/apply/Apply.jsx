import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Apply_form from "./Apply_form";
import Apply_timeline from "./Apply_timeline";

const Apply = () => {
  useEffect(() => {
    document.title = " Arjuna Scholarship | Scholarship Application for SLC & SEE students | Think Big Org - Together for Childhood, Against Injustice ";
  }, []);
  return (
    <>
      <Navbar />
      <div className=" max-w-screen-2xl w-full h-full overflow-hidden p-8">
        <div>
          <h1 data-aos="fade-right" data-aos-duration="1000" className=" text-2xl flex md:flex-row flex-col items-baseline mt-20 font-semibold  text-gray-700">
            Scholarship for needy SLC & SEE students. <span className=" text-xs text-red-600">(New deadline: June 04, 2025 ) </span> <span className=" text-xs text-red-700/75">Fee: $0</span>
          </h1>
          <h2 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400" className=" text-gray-700/80 mt-2">
            Education is at the heart of Think Big’s mission, and this scholarship represents a small yet meaningful step toward that goal. <br></br>
            <br></br> <strong>The Arjuna </strong>Scholarship is an annual initiative supporting students from underprivileged backgrounds in Nepal, made possible through partnerships with various online education platforms (This round: Ambition Guru
            Pvt Ltd). Each year, the scholarship is awarded to at least five students from Grade 10 and five from Grade 12, helping them continue their academic journey despite financial hardship. This effort addresses the ongoing gap in quality
            education, especially in public institutions where students often lack access to adequate academic support beyond school.{" "}
          </h2>
          <h2 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="800" className="text-gray-700/80 mt-2">
            With this scholarship, students will receive free access to the Ambition Guru online portal, which includes daily live classes, ask any time, model sets, notes, and more—completely free of charge.
          </h2>
          <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="900" className=" text-gray-700/80 mt-2">
            For more information visit:{" "}
            <a className=" text-green-600 underline" href="https://www.ambition.guru/">
              Ambition Guru
            </a>
          </p>
        </div>
        <div className=" flex mt-6 md:flex-row flex-col md:justify-between">
          <div className=" w-full text-gray-700 p-4">
            <h3 data-aos="fade-down" data-aos-duration="1000" className="  ">
              What we are expecting?
            </h3>
            <ul className=" list-inside  text-gray-600 list-decimal ml-3">
              <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                A person with good morals.
              </li>
              <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                Active involvement in extracurricular activities.
              </li>
              <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                A passion for learning and teaching.
              </li>
              <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
                From a financially disadvantaged background.
              </li>
            </ul>
          </div>

          <div className=" w-full md:border-l border-emerald-600 text-gray-700 p-4">
            <h3 data-aos="fade-down" data-aos-duration="1000" className="  ">
              What you should except?
            </h3>
            <ul className="list-inside text-gray-600 list-decimal ml-3">
              <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                {" "}
                One full year of scholarship from Ambition Guru.{" "}
              </li>
              <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                Daily Live classes, Ask any time, Recorded Videos, chapter's MCQs & Notes etc.{" "}
              </li>
              <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                {" "}
                Early access to Think Big's program.{" "}
              </li>
              <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
                {" "}
                New connection and experience...{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Apply_form />
      <Apply_timeline />
      <Footer />
    </>
  );
};

export default Apply;
