import { useEffect, useState } from "react";
// import { categories, propertiesCardshouse } from "../../utils/house";
// import Categories from "../../components/categories/Categories";
import { FaRegHeart } from "react-icons/fa";
import toast from "react-hot-toast";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { LuUpload, LuGrip } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import customAxios from "../../utils/axios";
import { getWilayaNameById } from "../../utils/data";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store";
import StarsReview from "../../components/starsReview/StarsReview";

const SingleProperty = () => {
  const user = useSelector((state: IRootState) => state.auth.user);
  const { id } = useParams();

  const [house, sethouse] = useState<any>({
    Pictures: [{ url: "/images.png" }],
  });
  const [propertyOwner, setpropertyOwner] = useState<any>();

  const getHouseById = async () => {
    try {
      const { data } = await customAxios(`/homes/${id}`);
      console.log(data);
      console.log(data?.Pictures[0]?.url);
      sethouse(data);
      console.log("this is hous");
      console.log(house?.Pictures[0]?.url);
    } catch (error) {
      console.log(error);
    }
  };
  const getPropertyOwnerById = async (id: string) => {
    try {
      const { data } = await customAxios(`/users/${id}`);
      console.log(data, "property owner");
      setpropertyOwner(data);
    } catch (error) {
      console.log(error);
    }
  };
  const [reviews, setreviews] = useState([]);
  const getHouseReviews = async () => {
    try {
      const { data } = await customAxios(`/homes/${id}/reviews `);
      console.log(data);
      setreviews(data);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data);
    }
  };
  useEffect(() => {
    getHouseById();
    getHouseReviews();
  }, []);
  useEffect(() => {
    getPropertyOwnerById(house?.userId);
    console.log(house?.userId);
  }, [house]);
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
      const difference: any = new Date(state[0]?.endDate - state[0]?.startDate);
      const unixDate: any = new Date(0);
      const dif = difference - unixDate;
      setdaysCount(dif / 1000 / 3600 / 24);
    }
  }, [state]);

  // const all

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
  const messageHouseHandler = async () => {
    try {
      const { data } = await customAxios.post(`/homes/${house?.id}/chat`);
      console.log(data, "message");
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const reserveHandler = async () => {
    try {
      console.log({
        checkIn: state[0].startDate,
        checkOut: state[0].endDate,
      });
      const { data } = await customAxios.post(`/homes/${house?.id}/reserve`, {
        checkIn: state[0].startDate,
        checkOut: state[0].endDate,
      });
      console.log(data);
      toast.success(
        "status is pending you must wait for the owner to accept your reservation"
      );
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data);
    }
  };
  const [review, setreview] = useState({
    rating: 5,
    comment: "",
  });
  const [emptyArray, setemptyArray] = useState<any[]>([]);
  useEffect(() => {
    setemptyArray([]);
    for (let index = 0; index < 5; index++) {
      setemptyArray((prev) => prev.concat(index));
    }
  }, []);
  const addReviewHandler = async () => {
    try {
      const { data } = await customAxios.post(`/homes/${house?.id}/review`, {
        rating: 6 - review.rating,
        comment: review.comment,
      });
      console.log(data);
      // toast.success(
      //   "status is pending you must wait for the owner to accept your reservation"
      // );
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data);
    }
  };
  return (
    <>
      <div className="container my-12">
        <div className="flex justify-between">
          <p className="font-bold text-2xl">{house?.title}</p>
          <div className="flex gap-6 items-center">
            <div
              onClick={() => copy()}
              className="flex gap-2 items-center cursor-pointer hover:opacity-75"
            >
              <LuUpload />
              <p className="underline">Share</p>
            </div>
            {/* <div className="flex gap-1 items-center">
              <FaRegHeart />
            </div> */}
          </div>
        </div>

        <div className="relative rounded-2xl flex gap-x-2 items-center  justify-center my-4">
          <div className="relative w-[50%] h-[348px] rounded-l-xl overflow-hidden">
            {house?.Pictures[0]?.url ? (
              <img
                src={house?.Pictures[0]?.url}
                alt=""
                className="w-full object-cover h-full"
              />
            ) : null}
            <div className="absolute bg-black opacity-0 duration-300 hover:opacity-15 left-0 top-0 w-full h-full"></div>
          </div>
          <div
            className="flex flex-col gap-y-2
        "
          >
            {emptyArray?.map((ele, index) => (
              <>
                {index <= 1 && (
                  <div className="relative h-[170px] object-fill">
                    <img
                      src={house?.Pictures[index + 1]?.url}
                      alt=""
                      className="w-full object-cover h-full"
                    />
                    <div className="absolute bg-black opacity-0 duration-300 hover:opacity-15 left-0 top-0 w-full h-full"></div>
                  </div>
                )}
              </>
            ))}
          </div>
          <div className="flex flex-col gap-y-2">
            {emptyArray?.map((ele, index) => (
              <>
                {index <= 3 && index >= 2 && (
                  <div className="relative h-[170px] object-fill">
                    <img
                      src={house?.Pictures[index + 1]?.url}
                      alt=""
                      className="w-full object-cover h-full"
                    />
                    <div className="absolute bg-black opacity-0 duration-300 hover:opacity-15 left-0 top-0 w-full h-full"></div>
                  </div>
                )}
              </>
            ))}
          </div>
          <Link
            to={`/properties/${id}/photos`}
            className="absolute -bottom-12 md:right-0 right-1/2 translate-x-1/2 md:translate-x-0 flex bg-white items-center gap-2 px-6 py-2 rounded-xl cursor-pointer"
          >
            <LuGrip />
            <p>Show all photos</p>
          </Link>
        </div>
        {/*  */}
        <div className="flex   mt-24 gap-20 md:flex-row flex-col">
          <div className="flex flex-col ">
            <p className="text-2xl font-bold">
              {house?.title}, {getWilayaNameById(house?.wilaya)}
            </p>
            <div className="flex gap-2 items-center">
              <p className="opacity-50">{house?.guests} guests</p>
              <p className="w-[4px] h-[4px] bg-black rounded-full"></p>
              <p className="opacity-50">{house?.bedrooms} bedrooms</p>
              <p className="w-[4px] h-[4px] bg-black rounded-full"></p>
              <p className="opacity-50">{house?.bathrooms} bathrooms</p>
            </div>
            {/* <div className="flex my-2">
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
            </div> */}
            <div className="flex items-center gap-4  my-3 flex-wrap justify-center sm:justify-normal ">
              <div className="size-10 rounded-full overflow-hidden">
                <img src={propertyOwner?.profilePicture} alt="" />
              </div>
              <div className="flex flex-col  opacity-90 flex-1">
                <p className="text-center sm:text-left ">
                  Hosted by{" "}
                  <span className="font-bold text-center">
                    {propertyOwner?.firstName}
                  </span>
                </p>
                <p className="text-center sm:text-left">
                  Member Since{" "}
                  <span className="font-bold">
                    {propertyOwner?.createdAT?.slice(0, 10)}
                  </span>
                </p>
              </div>
              {propertyOwner?.id != user?.id && (
                <button
                  onClick={() => messageHouseHandler()}
                  className="text-white bg-buttonColor rounded-xl px-6 py-2"
                >
                  Message Host
                </button>
              )}
            </div>
            <p className="my-4 py-12 border-y-2 border-y-[#4561ec53] ">
              {house?.description}
            </p>
            <div className="reviews flex flex-col">
              <p className="text-3xl font-bold">Reviews</p>
              {propertyOwner?.id != user?.id && (
                <>
                  <div className="py-2 my-8 px-4 mb-4 bg-white rounded-lg rounded-t-lg border ">
                    <textarea
                      id="comment"
                      value={review?.comment}
                      onChange={(e) =>
                        setreview({ ...review, comment: e.target.value })
                      }
                      className="px-0 w-full text-sm   border-0 focus:ring-0 focus:outline-none "
                      placeholder="Write a review..."
                      required
                    ></textarea>
                  </div>
                  <div className="flex flex-row-reverse justify-between p-10">
                    {emptyArray?.map((index) => (
                      <FaStar
                        onClick={() =>
                          setreview({ ...review, rating: index + 1 })
                        }
                        className={`${
                          review.rating < index + 2
                            ? "text-yellow-500 opacity-100 "
                            : "text-yellow-200  "
                        } w-6 h-6 mx-2 peer peer-hover:text-yellow-500 hover:text-yellow-500  `}
                      />
                    ))}
                    <span>{6 - review.rating}/5</span>
                  </div>
                  <button
                    type="submit"
                    disabled={review.comment.trim() == ""}
                    onClick={() => addReviewHandler()}
                    className="flex disabled:opacity-50 disabled:cursor-not-allowed justify-center items-center py-2.5 px-4 text-xs font-medium  text-white bg-buttonColor text-center"
                  >
                    Post comment
                  </button>
                </>
              )}
              <>
                {[1, 2, 4, 5, 2]?.map((review) => (
                  <div className="flex flex-col  border-y border-y-[#4561ec26] py-4  my-4">
                    <div className="flex items-center gap-2 my-3">
                      <div className="size-10 rounded-full overflow-hidden">
                        <img src={propertyOwner?.profileImage} alt="" />
                      </div>
                      <div className="flex flex-col gap2 opacity-90">
                        <StarsReview rating={5} />
                        <p>{propertyOwner?.firstName}</p>
                      </div>
                    </div>
                    <p className="bg-white p-2 rounded-xl">
                      camping in the desert with Mohamed was a really beautiful
                      and amazing experience that we will remember forever
                    </p>
                  </div>
                ))}
              </>
            </div>
          </div>
          {propertyOwner?.id != user?.id && (
            <>
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
                <button
                  onClick={() => reserveHandler()}
                  className="cursor-pointer mx-auto w-full   text-white px-6 py-1 rounded-xl bg-[#3d91ff] duration-300 hover:scale-105 justify-center my-2 flex items-center gap-2"
                >
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
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default SingleProperty;
