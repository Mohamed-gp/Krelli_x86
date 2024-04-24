import { useEffect, useState } from "react";
// import { categories, propertiesCardsData } from "../../utils/data";
// import Categories from "../../components/categories/Categories";
import { FaRegHeart } from "react-icons/fa";
import toast from "react-hot-toast";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { LuUpload, LuGrip } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";

const SingleProperty = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [daysCount, setdaysCount] = useState(0);
  useEffect(() => {
    if (state[0].endDate) {
      const difference: any = new Date(state[0].endDate - state[0].startDate);
      const unixDate: any = new Date(0);
      const dif = difference - unixDate;
      setdaysCount(dif / 1000 / 3600 / 24);
    }
  }, [state]);
  const data = {
    title: "Merzouga private luxury tent with bathroom shower",
    description: "this is a description",
    guestCount: 2,
    roomCount: 3,
    bedroomCount: 2,
    bathroomCount: 2,
  };
  const userHosterInfo = {
    name: "Outerbah Mohamed",
  };
  const images = [
    {
      src: "https://a0.muscache.com/im/pictures/miso/Hosting-1067908006730045311/original/332b24fd-3fca-49f1-ae7b-b5064e7ee73b.jpeg?im_w=720",
    },
    {
      src: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA2NzkwODAwNjczMDA0NTMxMQ%3D%3D/original/6487dfd3-fcf1-4027-878c-7593dd3d857c.jpeg?im_w=720",
    },
    {
      src: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA2NzkwODAwNjczMDA0NTMxMQ%3D%3D/original/a912f88b-729e-4864-bcdb-6dd9c6a6bc00.jpeg?im_w=720",
    },
    {
      src: "https://a0.muscache.com/im/pictures/hosting/Hosting-1067908006730045311/original/b9d65b7b-3c31-4e30-bc72-eec756703e51.jpeg?im_w=720",
    },
    {
      src: "https://a0.muscache.com/im/pictures/hosting/Hosting-1067908006730045311/original/2ae49af5-167c-47d1-8161-829ce1e6b757.jpeg?im_w=720",
    },
  ];
  const [activeImageIndex, setactiveImageIndex] = useState(0);

  const copy = () => {
    const input = document.createElement("input");
    input.setAttribute("value", location.href);
    document.body.appendChild(input);
    input.select();
    const result = document.execCommand("copy");
    document.body.removeChild(input);
    toast.success("copied succefuly to clipBoard,share it with your friends");
    return result;
  };
  return (
    <div className="container my-12">
      <div className="flex justify-between">
        <p className="font-bold text-2xl">{data.title}</p>
        <div className="flex gap-6 items-center">
          <div
            onClick={() => copy()}
            className="flex gap-2 items-center cursor-pointer hover:opacity-75"
          >
            <LuUpload />
            <p className="underline">Share</p>
          </div>
          <div className="flex gap-1 items-center">
            <FaRegHeart />
          </div>
        </div>
      </div>

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
          <LuGrip />
          <p>Show all photos</p>
        </div>
      </div>
      {/*  */}
      <div className="flex   mt-24 gap-20 md:flex-row flex-col">
        <div className="flex flex-col ">
          <p className="text-2xl font-bold">Tent in Merzouga, Tipaza</p>
          <div className="flex gap-2 items-center">
            <p className="opacity-50">9 guests</p>
            <p className="w-[4px] h-[4px] bg-black rounded-full"></p>
            <p className="opacity-50">4 bedrooms</p>
            <p className="w-[4px] h-[4px] bg-black rounded-full"></p>
            <p className="opacity-50">10 beds</p>
          </div>
          <div className="flex my-2">
            <span className="text-yellow-500">
              <FaStar />
            </span>
            <span className="text-yellow-500">
              <FaStar />
            </span>
            <span className="text-yellow-500">
              <FaStar />
            </span>
            <span className="text-yellow-500">
              <FaStar />
            </span>
            <span className="text-yellow-500">
              <FaStar />
            </span>
          </div>
          <div className="flex items-center gap-2 my-3">
            <div className="size-10 rounded-full overflow-hidden">
              <img src="../../../public/profile.jpg" alt="" />
            </div>
            <div className="flex flex-col  opacity-90">
              <p>
                Hosted by <span className="font-bold ">Mohamed</span>
              </p>
              <p>
                Member Since <span className="">2005/12/12</span>
              </p>
            </div>
          </div>
          <p className="my-4 py-12 border-y-2 border-y-[#4561ec53] ">
            At our luxury camp, you will have a chance to immerse yourself in
            the beauty of the desert, while enjoying all the comforts you need.
            Each tent is equipped with a comfortable bed, private bathroom, and
            shower. After a delicious dinner at the camp, you can relax under
            the starry sky, enjoy some Berber music around the campfire, and
            experience camel riding in the dunes. Don't miss the opportunity to
            witness the stunning sunset and sunrise from the camp
          </p>
          <div className="reviews flex flex-col">
            <p className="text-3xl font-bold">Reviews</p>
            <div className="flex flex-col  border-y border-y-[#4561ec26] py-4  my-4">
              <div className="flex items-center gap-2 my-3">
                <div className="size-10 rounded-full overflow-hidden">
                  <img src="../../../public/profile.jpg" alt="" />
                </div>
                <div className="flex flex-col gap2 opacity-90">
                  <div className="flex my-2">
                    <span className="text-yellow-500">
                      <FaStar />
                    </span>
                    <span className="text-yellow-500">
                      <FaStar />
                    </span>
                    <span className="text-yellow-500">
                      <FaStar />
                    </span>
                    <span className="text-yellow-500">
                      <FaStar />
                    </span>
                    <span className="text-yellow-500">
                      <FaStar />
                    </span>
                  </div>
                  <p>Mohamed Outerbah</p>
                </div>
              </div>
              <p className="bg-white p-2 rounded-xl">
                camping in the desert with Mohamed was a really beautiful and
                amazing experience that we will remember forever
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white p-6 rounded-xl h-fit">
          <p className="my-2">
            <span className="text-2xl">$47</span> night
          </p>
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
          <button className="cursor-pointer mx-auto w-full   text-white px-6 py-1 rounded-xl bg-[#3d91ff] duration-300 hover:scale-105 justify-center my-2 flex items-center gap-2">
            Reserve
          </button>
          <div className="flex justify-between my-2 text-2xl">
            <p className="font-bold text-lg">Nights</p>
            <p>${daysCount} * 47</p>
          </div>
          <div className="flex justify-between my-2 text-2xl">
            <p className="font-bold">Total</p>
            <p>${daysCount * 47}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleProperty;
