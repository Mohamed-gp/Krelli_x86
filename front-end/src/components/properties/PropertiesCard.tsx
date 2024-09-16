import { FaHeart } from "react-icons/fa6";
// this for static data
// import { propertiesCardsData } from "../../utils/data";
import { Link, useSearchParams } from "react-router-dom";
import customAxios from "../../utils/axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { BsHeart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store";

interface PropertiesCardProps {
  all: boolean;
  houses: any[];
  sethouses: (a: any) => any;
  filter: any;
  setfilter: any;
}

const PropertiesCard = ({
  all,
  houses,
  sethouses,
  filter,
  setfilter,
}: PropertiesCardProps) => {
  const user = useSelector((state: IRootState) => state.auth.user);
  const [SearchParams, setSearchParams] = useSearchParams();
  const [wishlist, setwishlist] = useState([]);
  const getHouses = async () => {
    try {
      if (all == false) {
        location.search == "";
      }
      const { data } = await customAxios("/homes" + location.search);

      if (all == false) {
        sethouses(data.data?.slice(0, 4));
      } else {
        sethouses(data.data);
      }
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
  }, [SearchParams]);
  useEffect(() => {
    if (user) {
      getWishlist();
    }
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

  useEffect(() => {
    console.log(houses);
  }, [houses]);
  return (
    <>
      {houses?.length == 0 && all ? (
        <div
          className="flex w-full items-center justify-center"
          style={{ height: "calc(100vh - 350px)" }}
        >
          <div className="flex flex-col items-center">
            <p className="font-bold">No Exact Much</p>
            <p className="mb-3 mt-1 text-center text-sm opacity-70">
              Try Changing Or Removing Some Of Your Filters
            </p>
            <div
              className="cursor-pointer rounded-xl border-2 border-black px-6 py-2 text-center font-bold"
              onClick={() => setfilter({ category: "" })}
            >
              Remove All Filters
            </div>
          </div>
        </div>
      ) : houses?.length > 0 ? (
        <>
          {houses?.map((property: any) => {
            return (
              <>
                <Link
                  to={`/properties/${property?.id}`}
                  style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 15px" }}
                  key={property?.id}
                  className="property-card w-[240px] overflow-hidden rounded-xl bg-white"
                >
                  <div className="img relative">
                    <div className="img h-[160px] w-[240px] overflow-hidden">
                      <img
                        src={property?.Pictures[0]?.url}
                        alt={property?.title}
                        className="duration-300 hover:scale-105"
                      />
                    </div>
                    {user && (
                      <div
                        className=""
                        onClick={(e) => toggleWishlistHandler(e, property.id)}
                      >
                        <FaHeart
                          className={`absolute right-3 top-[11px] text-xl ${
                            wishlist?.find((ele) => ele?.homeId == property?.id)
                              ? "text-buttonColor"
                              : ""
                          }`}
                        />
                        <BsHeart className="absolute right-3 top-3 text-xl text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 px-3 py-4">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className="font-bold">{property.title}</p>
                        <p>${property.price}/ Night</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </>
      ) : null}
    </>
  );
};
export default PropertiesCard;
