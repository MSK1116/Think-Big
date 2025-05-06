import React from "react";
import Image_Loader from "../component/Img_Loader";

const GalleryCard = ({ items }) => {
  const backgroundImageUrl = `/prg/${items.img1}.jpg`;

  return (
    <div className="w-full p-6 mx-auto">
      <div data-aos="fade-up" data-aos-offset="50" onClick={() => document.getElementById(items.id).showModal()} className="shadow-md hover:shadow-xl rounded bg-white overflow-hidden cursor-pointer">
        <div className="grid grid-cols-2 h-64">
          <div className="h-64 border overflow-hidden ">
            <Image_Loader styleForPar={" size-full"} src={`/prg/${items.img1}.jpg`} styleForImg={"object-cover hover:scale-105 transition-all duration-300 h-64 w-full"} alt={items.description} />
          </div>
          <div className="h-64 border overflow-hidden">
            <Image_Loader styleForPar={" h-32 w-full"} src={`/prg/${items.img2}.jpg`} styleForImg={"object-cover hover:scale-105 transition-all duration-300 h-32 w-full "} alt={items.description} />
            <Image_Loader styleForPar={" h-32 w-full"} src={`/prg/${items.img3}.jpg`} styleForImg={"object-cover hover:scale-105 transition-all duration-300 h-32 w-full "} alt={items.description} />
          </div>
        </div>
        <div className="p-3">
          <div className="flex flex-col cursor-pointer space-y-3 md:flex justify-between">
            <div className="flex flex-row place-content-between">
              <h2 data-aos="fade-up" className="font-medium">
                {items.title}
              </h2>
              <span data-aos="fade-left" className="text-sm clamp text-gray-500">
                {items.date}
              </span>
            </div>
            <div>
              <h3 data-aos="fade-up" data-aos-delay="100" className="text-sm line-clamp-2 md:line-clamp-3 text-gray-500">
                {items.description}
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <dialog id={items.id} className="modal  max-w-screen-2xl">
        <div className="modal-box w-screen h-full bg-cover p-0 bg-center" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
          <div className="bg-black/50 w-full p-4 h-full">
            <form method="dialog">
              {/* If there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle text-red-600 btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <p className="text-gray-300">{items.date}</p>
            <h3 className="font-bold text-gray-50 text-3xl">{items.title}</h3>
            <p className="py-4 text-gray-100">{items.description}</p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default GalleryCard;
