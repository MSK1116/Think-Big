import React from "react";
import Butterfly from "../component/Butterfly";
import SVGFriend1 from "../svg/SVGFriend1";
import { FaSchool, FaBookOpenReader } from "react-icons/fa6";
import { LuSchool, LuBookCopy } from "react-icons/lu";
import { IoSchoolSharp } from "react-icons/io5";
import { TiGroup } from "react-icons/ti";
import { FaHandsHelping } from "react-icons/fa";
import { GiSecretBook, GiHealthCapsule } from "react-icons/gi";
import { MdLocalMovies, MdHealthAndSafety } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";
import { RiMovie2Fill, RiWomenLine } from "react-icons/ri";
import SVGDollPlay from "../svg/SVGDollPlay";
import Image_Loader from "../component/Img_Loader";

const In_2025_banner = () => {
  return (
    <>
      <div className=" absolute md:block hidden bottom-0 left-0">
        <Butterfly />
      </div>
      <div className=" min-h-screen space-y-32 mt-10 p-8 relative">
        <h1 data-aos="fade-down" data-aos-duration="1000" className=" text-center text-2xl md:text-3xl mt-6 uppercase font-bold text-green-600">
          Our goal for 2025
        </h1>
        {/* 1 */}
        <div className="h-full relative md:max-h-screen flex items-center flex-col md:flex-row mt-10">
          <div className=" relative md:w-1/2  flex justify-center">
            <div className=" absolute inset-0 z-10 w-full h-full"></div>
            <img data-aos="zoom-in" data-aos-duration="1000" className=" md:size-80 h-[80%] w-[80%] " src="/webi/GroupWork.jpeg"></img>
          </div>
          <div className=" mt-3 md:mt-0 md:w-1/2 md:h-3/4 ">
            <h1 data-aos="fade-right" data-aos-duration="1000" className=" font-semibold md:text-xl  uppercase">
              <span className=" font-playwrite  text-3xl lowercase font-bold">1.</span> Establishment of sub-club at schools
            </h1>
            <h2 data-aos="fade-up" data-aos-duration="1000" className=" indent-8">
              In rural areas of Nepal, students rarely get the chance to showcase their skills or access platforms that help them grow into the leaders they could become. That’s why we want to create sub-clubs of our organization in schools. These
              clubs will give teenagers a chance to uncover their hidden talents, take part in extracurricular activities, and develop as future leaders. We don’t believe in being leaders or big thinkers on our own—we want to rise together with all
              the underprivileged young minds who deserve the same opportunities.{" "}
            </h2>
          </div>
          <div className=" hidden md:block">
            <TiGroup data-aos="zoom-in" data-aos-duration="1000" className=" floating03 absolute top-0 right-80 size-14 text-green-700/20" />
            <FaHandsHelping data-aos="zoom-in" data-aos-duration="1000" className=" floating01 absolute bottom-10  left-[35rem] size-14 text-green-700/20" />
            <IoSchoolSharp data-aos="zoom-in" data-aos-duration="1000" className="floating02 absolute  -top-52 left-20 size-14 text-green-700" />
          </div>
        </div>
        <hr></hr>
        {/* 2 */}

        <div className="h-full md:max-h-screen relative flex flex-col md:flex-row mt-10">
          <div className=" md:order-2 relative md:w-1/2 flex justify-end">
            <div className=" absolute inset-0 z-10 w-full h-full"></div>
            <img data-aos="zoom-in" data-aos-duration="1000" className=" size-80" src="/webi/Scholarship.png"></img>
          </div>
          <div className=" md:ml-20 md:w-1/2 md:h-3/4 ">
            <h1 data-aos="fade-right" data-aos-duration="1000" className=" font-semibold text-xl  uppercase">
              <span className=" font-playwrite text-3xl lowercase font-bold">2.</span> Scholarship for SEE & SLC students
            </h1>
            <h2 data-aos="fade-up" data-aos-duration="1000" className=" indent-8">
              We plan to partner with online education platforms to reach underprivileged students in rural areas and offer them full scholarships for board exam preparation. In many rural schools, there’s a shortage of skilled teachers, and courses
              often remain incomplete, leaving students unprepared. As a result, over 50% of students fail their exams. To address this, we will provide free online courses to help these students pass their exams and take a crucial step toward
              achieving their dreams.{" "}
            </h2>
          </div>
          <a data-aos="fade-right" className=" md:text-sm text-xs  p-2 text-right bg-emerald-600 hover:bg-emerald-700 absolute bottom-7 z-10  -left-9 text-white rounded-r-md  max-w-fit" href="/apply">
            Apply now!
          </a>
          <div className=" hidden md:block">
            <FaSchool data-aos="zoom-in" data-aos-duration="1000" className=" floating03 absolute top-0 right-80 size-14 text-green-700/20" />
            <LuSchool data-aos="zoom-in" data-aos-duration="1000" className=" floating01 absolute bottom-0  left-52 size-14 text-green-700/20" />
            <IoSchoolSharp data-aos="zoom-in" data-aos-duration="1000" className=" floating02 absolute  top-0 left-20 size-14 text-green-700/20" />
          </div>
        </div>
        <hr></hr>
        {/* 3 */}
        <div className="h-full relative md:max-h-screen flex flex-col md:flex-row mt-10">
          <div className="  relative md:w-1/2 flex justify-center">
            <div className=" absolute inset-0 z-10 w-full h-full"></div>
            <img data-aos="zoom-in" data-aos-duration="1000" className=" size-80" src="/webi/Books.jpg"></img>
          </div>
          <div className=" md:mt-0 mt-10 md:w-1/2 md:h-3/4 ">
            <h1 data-aos="fade-right" data-aos-duration="1000" className=" font-semibold text-xl  uppercase">
              <span className=" font-playwrite text-3xl lowercase font-bold">3.</span> Distribution of Novel, self help & academic books
            </h1>
            <h2 data-aos="fade-up" data-aos-duration="1000" className=" indent-8">
              We will gather books through donations or sponsorships and collaborate with the village development committee to create dedicated spaces for these books and their readers within community buildings. This initiative will provide a
              valuable resource hub where curious minds, big thinkers, and active learners can dream big and take meaningful steps toward turning those dreams into reality.
            </h2>
          </div>
          <div className=" hidden md:block">
            <LuBookCopy data-aos="zoom-in" data-aos-duration="1000" className=" floating03 absolute -top-14 right-80 size-14 text-green-700/20" />
            <GiSecretBook data-aos="zoom-in" data-aos-duration="1000" className="floating01 absolute bottom-10  left-[35rem] size-14 text-green-700/20" />
            <FaBookOpenReader data-aos="zoom-in" data-aos-duration="1000" className=" floating02 absolute  -top-28 left-20 size-14 text-green-700/20" />
          </div>
        </div>
        <hr></hr>
        {/* 4 */}
        <div className="h-full relative md:max-h-screen flex flex-col md:flex-row mt-10">
          <div className=" md:order-2 relative md:w-1/2 flex justify-end">
            <div className=" absolute inset-0 z-10 w-full h-full"></div>
            <img data-aos="zoom-in" data-aos-duration="1000" className=" size-80" src="/webi/Camera.gif"></img>
          </div>
          <div className="md:mt-0 mt-10 md:ml-20 md:w-1/2 md:h-3/4 ">
            <h1 data-aos="fade-right" data-aos-duration="1000" className=" font-semibold text-xl  uppercase">
              <span className=" font-playwrite text-3xl lowercase font-bold">4.</span> Documentary on child marriage
            </h1>
            <h2 data-aos="fade-up" data-aos-duration="1000" className=" indent-8">
              We plan to create a documentary that tells the stories of two families: one that marries their daughter off while she is underage and another that supports their daughter in completing her education and marrying when and whom she
              chooses. The documentary will conclude by showcasing the long-term effects on their mental, social, physical, and relational well-being years after marriage. By allowing the audience to visually compare the outcomes of these two paths,
              we aim to leave a lasting impact. Video storytelling has a unique power to connect deeply with people, and if we can resonate with the roots and realities of our target audience, this documentary could inspire meaningful change.{" "}
            </h2>
          </div>
          <div className=" hidden md:block  ">
            <BiSolidCameraMovie data-aos="zoom-in" data-aos-duration="1000" className=" floating01 absolute  -top-14 right-80 size-14 text-green-700/20" />
            <RiMovie2Fill data-aos="zoom-in" data-aos-duration="1000" className=" floating03 animate-pulse absolute bottom-10  left-[35rem] size-14 text-green-700/20" />
            <MdLocalMovies data-aos="zoom-in" data-aos-duration="1000" className=" floating02 absolute  -top-28 left-20 size-14 text-green-700/20" />
          </div>
        </div>
        <hr></hr>
        {/* 5 */}
        <div className="h-full relative md:max-h-screen flex flex-col md:flex-row mt-10">
          <div className="  relative md:w-1/2 flex justify-center">
            <div className="absolute inset-0  z-10 w-full h-full"></div>
            <SVGDollPlay Wid={500} Hei={250} />
          </div>
          <div className=" md:mt-0 mt-10 md:w-1/2 md:h-3/4 ">
            <h1 data-aos="fade-right" data-aos-duration="1000" className=" font-semibold text-xl  uppercase">
              <span className=" font-playwrite text-3xl lowercase font-bold">5.</span> Awarness and distribution of sanitary <span className=" text-emerald-700">goods</span>
            </h1>
            <h2 data-aos="fade-up" data-aos-duration="1000" className=" indent-8">
              We are committed to addressing the critical issues surrounding menstrual health and hygiene. As part of our initiative, we plan to conduct awareness campaigns and distribute sanitary goods four times a year. Our efforts aim to reach as
              many communities as possible, and we hope to expand further as our budget allows. In addition to distributing sanitary pads and other hygiene products, our campaigns will focus on raising awareness about menstrual health, the importance
              of hygiene, and the impact of early marriage on young girls' lives. Through education and resource distribution, we strive to empower individuals and create a supportive environment for women's health and well-being.{" "}
            </h2>
          </div>
          <div className=" hidden md:block">
            <GiHealthCapsule data-aos="zoom-in" data-aos-duration="1000" className=" floating03 absolute -top-14 right-80 size-14 text-green-700/20" />
            <MdHealthAndSafety data-aos="zoom-in" data-aos-duration="1000" className="floating01 absolute bottom-10  left-[35rem] size-14 text-green-700/20" />
            <RiWomenLine data-aos="zoom-in" data-aos-duration="1000" className=" floating02 absolute  -top-28 left-20 size-14 text-green-700/20" />
          </div>
        </div>
        <p className=" text-center uppercase text-xs text-gray-700">The first quarter meeting of this year will take place at the end of March. The budget distribution and additional initiatives will be updated after that.</p>
      </div>{" "}
    </>
  );
};

export default In_2025_banner;
