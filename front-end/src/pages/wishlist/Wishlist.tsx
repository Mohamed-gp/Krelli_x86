import { FaHeart, FaStar } from "react-icons/fa6";

import LeftSideNav from "../../components/leftSideNav/LeftSideNav";
import { useEffect, useState } from "react";
import { BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getWilayaIdByName, getWilayaNameById } from "../../utils/data";
import toast from "react-hot-toast";
import customAxios from "../../utils/axios";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store";

const Wishlist = () => {
  const user = useSelector((state: IRootState) => state.auth.user);
  const [wishlist, setwishlist] = useState([]);
  console.log(wishlist)
  const [houses, sethouses] = useState([]);
  const getHouses = async () => {
    try {
      const { data } = await customAxios("/homes");
      sethouses(data);
      console.log(data);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data);
    }
  };
  const getWishlist = async () => {
    try {
      const { data } = await customAxios.get(`/users/wishlist/${user?.id}`);
      console.log(data, "this is data");
      setwishlist(data);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data);
    }
  };
  useEffect(() => {
    getHouses();
  }, []);
  useEffect(() => {
    getWishlist();
  }, []);
  const toggleWishlistHandler = async (e, id) => {
    e.preventDefault();
    try {
      const { data } = await customAxios.post(`/users/wishlist/${id}`);
      console.log(data);
      setwishlist(data);
      toast.success("wishlist toggled successfuly");
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data);
    }
  };
  return (
    <>
      <div className=" flex    mt-12 gap-6 ">
        {/* left side */}
        <LeftSideNav />
        {/* right side */}
        <div className="w-full">
          <p className="text-3xl font-bold mb-6">Wishlist</p>

          <div className="flex flex-wrap items-center justify-between gap-3 my-6 mx-12">
            {wishlist?.length == 0 && (
              <div
                className="flex justify-center items-center w-full"
                style={{ height: "calc(100vh - 350px)" }}
              >
                <div className="flex flex-col items-center">
                  <p className="font-bold">No Exact Much</p>
                  <p className="opacity-70 text-sm mt-1 mb-3 text-center">
                    Try Changing Or Removing Some Of Your Filters
                  </p>
                  <Link
                    to={`/properties?wilaya=&category=`}
                    className="border-2 font-bold border-black px-6 py-2 rounded-xl text-center cursor-pointer"
                  >
                    Add Some Properties To Wishlist
                  </Link>
                </div>
              </div>
            )}
            {houses?.map((property: any) => (
              <>
                {wishlist?.find((ele) => ele?.homeId == property?.id) && (
                  <Link
                    to={`/properties/${property.id}`}
                    style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 15px" }}
                    key={property.path}
                    className="w-[240px] rounded-xl overflow-hidden bg-white property-card"
                  >
                    <div className="img relative">
                      <div className=" img w-[240px] h-[160px] overflow-hidden">
                        <img
                          src={property?.Pictures[0]?.url}
                          alt={property.title}
                          className="hover:scale-105 duration-300"
                        />
                      </div>
                      <div
                        className=""
                        onClick={(e) => toggleWishlistHandler(e, property.id)}
                      >
                        <FaHeart
                          className={`absolute top-[11px] right-3 text-xl  text-red-600`}
                        />
                        <BsHeart className="absolute top-3 right-3 text-xl text-white" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 px-3 py-4">
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <p className="font-bold">{property.title}</p>
                          <p>${property.price}/ Night</p>
                        </div>
                        <div>
                          <p className="font-bold">
                            {getWilayaNameById(property.wilaya)}
                          </p>
                        </div>
                      </div>
                      {/* <div className="flex gap-1">
                        <span className="flex text-yellow-400">
                          <FaStar />
                        </span>
                        <span className="flex text-yellow-400">
                          <FaStar />
                        </span>
                        <span className="flex text-yellow-400">
                          <FaStar />
                        </span>
                        <span className="flex text-yellow-400">
                          <FaStar />
                        </span>
                        <span>
                          <FaStar />
                        </span>
                      </div> */}
                    </div>
                  </Link>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Wishlist;
