import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import customAxios from "../../utils/axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { BsHeart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store";
import Slider from "../slider/Slider";

interface PropertyCardProps {
  property: any;
}
const PropertyCard = ({ property }: PropertyCardProps) => {
  const user = useSelector((state: IRootState) => state.auth);
  const [slideIndex, setslideIndex] = useState<number>(1);
  const [wishlist, setwishlist] = useState([]);
  const getWishlist = async () => {
    try {
      const { data } = await customAxios.get(`/users/wishlist/${user?.id}`);
      setwishlist(data.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

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

  useEffect(() => {
    if (user) {
      getWishlist();
    }
  }, []);
  return (
    <Link
      to={`/properties/${property?.id}`}
      style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 15px" }}
      key={property?.id}
      className="property-card w-[400px] overflow-hidden rounded-xl bg-white"
    >
      <div className="img relative">
        {/* image slider*/}
        <Slider slideIndex={slideIndex} setslideIndex={setslideIndex} />
        <div
          className={`flex w-[300vw] overflow-x-hidden text-[white] duration-500`}
          style={{
            transform: `translateX(${-100 * slideIndex}vw)`,
            // minHeight: "calc(100vh - 70.94px)",
          }}
        >
          {" "}
        </div>
        {/* {property.?.map((product) => (
                      <HeroProduct product={product} />
                    ))} */}
        {/* image slider*/}
        <div className="img relative overflow-hidden">
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
              className={`absolute right-3 top-[13px] z-50 text-xl duration-300 hover:text-buttonColor ${
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
            <p className="">
              {property?.Review?.rating
                ? property?.Review?.rating
                : "not rated yet"}
            </p>
          </div>
          <p className="text-center font-bold text-primaryColor">
            ${property.price}/ Night
          </p>
        </div>
      </div>
    </Link>
  );
};
export default PropertyCard;
