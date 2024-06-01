import { Link, useParams } from "react-router-dom";
import {
  FaDoorOpen,
  FaHeart,
  FaPersonWalkingArrowRight,
  FaStar,
} from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/slices/authSlice";
import customAxios from "../../utils/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IRootState } from "../../store/store";
import { useEffect, useState } from "react";
import { getWilayaNameById } from "../../utils/data";
import { BsHeart } from "react-icons/bs";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const user = useSelector((state: IRootState) => state.auth.user);
  const logoutHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(authActions.logout());
      const { data } = await customAxios.get("/auth/logout");
      toast.success(data);
      navigate("/");
    } catch (error: any) {
      toast.error(error.message);
      console.log(error.message);
    }
  };
  console.log(user);
  const [wishlist, setwishlist] = useState([]);
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
  const [userInfo, setuserInfo] = useState<any>({});
  const getUserById = async () => {
    try {
      const { data } = await customAxios.get(`/users/${id}`);
      setuserInfo(data);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data);
    }
  };
  useEffect(() => {
    getUserById();
  }, []);
  return (
    <div
      className="container py-16 sm:px-32"
      style={{ minHeight: "calc(100vh - 70.94px)" }}
    >
      <div className="my-10 rounded-xl border-2 border-buttonColor bg-white p-3">
        <p className="border-b border-buttonColor pb-1 font-bold text-center">
          Profile
        </p>
        <div className="flex flex-col-reverse  items-center justify-between gap-x-32 px-4 py-6">
          <div className="flex flex-col md:flex-row-reverse justify-between items-center w-full gap-3">
            <div className="rounded-full w-36 h-36 overflow-hidden">
              <img src={userInfo?.profileImage} alt="avatar" className="" />
            </div>
            <div className="flex gap-1 flex-col">
              <p>
                <span className="font-bold">firstName:</span>{" "}
                {userInfo?.firstName}
              </p>
              <p>
                <span className="font-bold">lastName:</span>{" "}
                {userInfo?.lastName}
              </p>
              <p>
                <span className="font-bold">Email:</span> {userInfo?.email}
              </p>
            </div>
          </div>
        </div>
      </div>

      {user?.id == id && (
        <div className="my-10 rounded-xl border-2 border-buttonColor p-3 bg-white">
          <p className="border-b border-buttonColor pb-1 font-bold text-center">
            Your Wishlist
          </p>
          <>
            <div className=" flex    mt-12 gap-6 ">
              <div className="w-full">
                <div className="flex flex-wrap items-center justify-between gap-3 my-6 mx-12">
                  {wishlist?.length == 0 && (
                    <div
                      className="flex justify-center items-center w-full"
                      style={{ height: "calc(100vh - 350px)" }}
                    >
                      <div className="flex flex-col items-center">
                        <p className="font-bold">No Wishlist Found</p>
                        <p className="opacity-70 text-sm mt-1 mb-3 text-center">
                          Go Browse Some Properties And Add To Wishlist
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
                          style={{
                            boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 15px",
                          }}
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
                              onClick={(e) =>
                                toggleWishlistHandler(e, property.id)
                              }
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
        </div>
      )}
      <div className="flex items-center justify-end">
        <button
          onClick={(e) => logoutHandler(e)}
          className="flex items-center gap-4 rounded-xl bg-buttonColor px-6 py-2    text-white"
        >
          Logout
          <span className="text-2xl">
            <FaPersonWalkingArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};
export default Profile;
