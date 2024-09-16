import { useState } from "react";
import { images } from "../../utils/data";
import { LuGrip } from "react-icons/lu";



const SinglePropertyImage = () => {

  return (
    <div className="relative rounded-2xl flex gap-x-2 items-center  justify-center my-4">
      <div className="relative w-[50%] h-[348px] rounded-l-xl overflow-hidden">
        <img
          src={images[0].src}
          alt=""
          className="w-full object-cover h-full"
        />
        <div className="absolute bg-black opacity-0 duration-300 hover:opacity-15 left-0 top-0 w-full h-full"></div>
      </div>
      <div
        className="flex flex-col gap-y-2
        "
      >
        <div className="relative h-[170px] object-fill">
          <img
            src={images[1].src}
            alt=""
            className="w-full object-cover h-full"
          />
          <div className="absolute bg-black opacity-0 duration-300 hover:opacity-15 left-0 top-0 w-full h-full"></div>
        </div>
        <div className="relative h-[170px] ">
          <img
            src={images[2].src}
            alt=""
            className="w-full object-cover h-full"
          />
          <div className="absolute bg-black opacity-0 duration-300 hover:opacity-15 left-0 top-0 w-full h-full"></div>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="relative h-[170px] rounded-tr-xl overflow-hidden">
          <img
            src={images[1].src}
            alt=""
            className="w-full object-cover h-full"
          />
          <div className="absolute bg-black opacity-0 duration-300 hover:opacity-15 left-0 top-0 w-full h-full"></div>
        </div>
        <div className="relative h-[170px] rounded-br-xl overflow-hidden">
          <img
            src={images[2].src}
            alt=""
            className="w-full object-cover h-full"
          />
          <div className="absolute bg-black opacity-0 duration-300 hover:opacity-15 left-0 top-0 w-full h-full"></div>
        </div>
      </div>
      <div className="absolute -bottom-12 md:right-0 right-1/2 translate-x-1/2 md:translate-x-0 flex bg-white items-center gap-2 px-6 py-2 rounded-xl cursor-pointer">
        <LuGrip/>
        <p>Show all photos</p>
      </div>
    </div>
  );
};
export default SinglePropertyImage;
