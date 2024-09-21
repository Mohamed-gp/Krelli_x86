import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import customAxios from "../../utils/axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { BsHeart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store/store";
import Slider from "../slider/Slider";
import { authActions } from "../../store/slices/authSlice";

interface PropertyCardProps {
  property: any;
}
const PropertyCard = ({ property }: PropertyCardProps) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: IRootState) => state.auth);
  const [slideIndex, setslideIndex] = useState<number>(0);

  const toggleWishlistHandler = async (e, id) => {
    e.preventDefault();
    try {
      const { data } = await customAxios.post(`/users/wishlist/${id}`);
      dispatch(authActions.setWishlist(data.data));
      toast.success(data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <Link
      to={`/properties/${property?.id}`}
      style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 15px" }}
      key={property?.id}
      className="property-card w-[400px] overflow-hidden rounded-xl bg-white"
    >
      <div className="relative">
        <Slider
          slideIndex={slideIndex}
          setslideIndex={setslideIndex}
          imagesLength={property.Pictures.length}
        />
        <div className="img relative max-h-[250px] overflow-hidden">
          <img
            src={property?.Pictures[slideIndex]?.url}
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
              className={`absolute right-[15px] top-[13px] z-50 text-[19px] duration-300 hover:text-buttonColor ${
                user.Favorite?.find((ele) => ele?.homeId == property?.id)
                  ? "text-buttonColor"
                  : ""
              }`}
            />
            <BsHeart className="absolute right-3 top-3 text-[22px]  text-white" />
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
