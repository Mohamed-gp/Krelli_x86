import { FaHeart } from "react-icons/fa6";
import LeftSideNav from "../../components/leftSideNav/LeftSideNav";
import { useEffect, useState } from "react";
import { BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import customAxios from "../../utils/axios";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store";

const Wishlist = () => {
  const user = useSelector((state: IRootState) => state.auth.user);
  const [wishlist, setwishlist] = useState([]);
  const [houses, sethouses] = useState([]);
  const getHouses = async () => {
    try {
      const { data } = await customAxios.get("/homes");
      sethouses(data.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  const getWishlist = async () => {
    try {
      const { data } = await customAxios.get(`/users/wishlist/${user?.id}`);
      setwishlist(data.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    getHouses();
    getWishlist();
  }, []);

  const toggleWishlistHandler = async (e, id) => {
    e.preventDefault();
    try {
      const { data } = await customAxios.post(`/users/wishlist/${id}`);
      setwishlist(data.data);
      toast.success(data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div className="mt-12 flex gap-6">
        {/* left side */}
        <LeftSideNav />
        {/* right side */}
        <div className="w-full">
          <p className="mb-6 text-3xl font-bold">Wishlist</p>

          <div className="mx-12 my-6 flex flex-wrap items-center justify-between gap-3">
            {wishlist?.length == 0 && (
              <div
                className="flex w-full items-center justify-center"
                style={{ height: "calc(100vh - 350px)" }}
              >
                <div className="flex flex-col items-center">
                  <p className="font-bold">No Exact Much</p>
                  <p className="mb-3 mt-1 text-center text-sm opacity-70">
                    Try Changing Or Removing Some Of Your Filters
                  </p>
                  <Link
                    to={`/properties?category=`}
                    className="cursor-pointer rounded-xl border-2 border-black px-6 py-2 text-center font-bold"
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
                    className="property-card w-[240px] overflow-hidden rounded-xl bg-white"
                  >
                    <div className="img relative">
                      <div className="img h-[160px] w-[240px] overflow-hidden">
                        <img
                          src={property?.Pictures[0]?.url}
                          alt={property.title}
                          className="duration-300 hover:scale-105"
                        />
                      </div>
                      <div
                        className=""
                        onClick={(e) => toggleWishlistHandler(e, property.id)}
                      >
                        <FaHeart
                          className={`absolute right-3 top-[11px] text-xl text-buttonColor`}
                        />
                        <BsHeart className="absolute right-3 top-3 text-xl text-white" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 px-3 py-4">
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <p className="font-bold">{property.title}</p>
                          <p>${property.price}/ Night</p>
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
