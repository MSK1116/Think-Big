import React from "react";
import Butterfly from "../component/Butterfly";
import SVGFriend1 from "../svg/SVGFriend1";

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
        <div className="h-full md:max-h-screen flex items-center flex-col md:flex-row mt-10">
          <div className=" relative md:w-1/2  flex justify-center">
            <div className=" absolute inset-0 z-10 w-full h-full"></div>
            <img className=" md:size-80 h-[80%] w-[80%] " src="/webi/GroupWork.jpeg"></img>
          </div>
          <div className=" mt-3 md:mt-0 md:w-1/2 md:h-3/4 ">
            <h1 className=" font-semibold md:text-xl  uppercase">
              <span className=" font-playwrite  text-3xl lowercase font-bold">1.</span> Establishment of sub-club at schools
            </h1>
            <h1 className=" indent-8">
              In rural areas of Nepal, students rarely get the chance to showcase their skills or access platforms that help them grow into the leaders they could become. That’s why we want to create sub-clubs of our organization in schools. These
              clubs will give teenagers a chance to uncover their hidden talents, take part in extracurricular activities, and develop as future leaders. We don’t believe in being leaders or big thinkers on our own—we want to rise together with all
              the underprivileged young minds who deserve the same opportunities.{" "}
            </h1>
          </div>
        </div>
        <hr></hr>
        {/* 2 */}

        <div className="h-full md:max-h-screen flex flex-col md:flex-row mt-10">
          <div className=" md:order-2 relative md:w-1/2 flex justify-end">
            <div className=" absolute inset-0 z-10 w-full h-full"></div>
            <img className=" size-80" src="/webi/Scholarship.png"></img>
          </div>
          <div className=" md:ml-20 md:w-1/2 md:h-3/4 ">
            <h1 className=" font-semibold text-xl  uppercase">
              <span className=" font-playwrite text-3xl lowercase font-bold">2.</span> Scholarship for 20 students
            </h1>
            <h1 className=" indent-8">
              We plan to partner with online education platforms to reach underprivileged students in rural areas and offer them full scholarships for board exam preparation. In many rural schools, there’s a shortage of skilled teachers, and courses
              often remain incomplete, leaving students unprepared. As a result, over 50% of students fail their exams. To address this, we will provide free online courses to help these students pass their exams and take a crucial step toward
              achieving their dreams.{" "}
            </h1>
          </div>
        </div>
        <hr></hr>
        {/* 3 */}
        <div className="h-full md:max-h-screen flex flex-col md:flex-row mt-10">
          <div className="  relative md:w-1/2 flex justify-center">
            <div className=" absolute inset-0 z-10 w-full h-full"></div>
            <img className=" size-80" src="/webi/Books.jpg"></img>
          </div>
          <div className=" md:mt-0 mt-10 md:w-1/2 md:h-3/4 ">
            <h1 className=" font-semibold text-xl  uppercase">
              <span className=" font-playwrite text-3xl lowercase font-bold">3.</span> Distribution of Novel, self help & academic books
            </h1>
            <h1 className=" indent-8">
              We will gather books through donations or sponsorships and collaborate with the village development committee to create dedicated spaces for these books and their readers within community buildings. This initiative will provide a
              valuable resource hub where curious minds, big thinkers, and active learners can dream big and take meaningful steps toward turning those dreams into reality.
            </h1>
          </div>
        </div>
        <hr></hr>
        {/* 4 */}
        <div className="h-full md:max-h-screen flex flex-col md:flex-row mt-10">
          <div className=" md:order-2 relative md:w-1/2 flex justify-end">
            <div className=" absolute inset-0 z-10 w-full h-full"></div>
            <img className=" size-80" src="/webi/Camera.gif"></img>
          </div>
          <div className="md:mt-0 mt-10 md:ml-20 md:w-1/2 md:h-3/4 ">
            <h1 className=" font-semibold text-xl  uppercase">
              <span className=" font-playwrite text-3xl lowercase font-bold">3.</span> Documentary on child marriage
            </h1>
            <h1 className=" indent-8">
              We plan to create a documentary that tells the stories of two families: one that marries their daughter off while she is underage and another that supports their daughter in completing her education and marrying when and whom she
              chooses. The documentary will conclude by showcasing the long-term effects on their mental, social, physical, and relational well-being years after marriage. By allowing the audience to visually compare the outcomes of these two paths,
              we aim to leave a lasting impact. Video storytelling has a unique power to connect deeply with people, and if we can resonate with the roots and realities of our target audience, this documentary could inspire meaningful change.{" "}
            </h1>
          </div>
        </div>
        <p className=" text-center uppercase text-xs text-gray-700">The first quarter meeting of this year will take place at the end of March. The budget distribution and additional initiatives will be updated after that.</p>
      </div>{" "}
    </>
  );
};

export default In_2025_banner;
