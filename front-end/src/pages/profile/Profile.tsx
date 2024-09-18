import { Link, useParams } from "react-router-dom";
import { FaHeart, FaPersonWalkingArrowRight } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/slices/authSlice";
import customAxios from "../../utils/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IRootState } from "../../store/store";
import { useEffect, useState } from "react";
import { BsHeart } from "react-icons/bs";
import PropertyCard from "../../components/properties/PropertyCard";

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
      toast.success(data.data);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
  const [wishlist, setwishlist] = useState([]);
  const [houses, sethouses] = useState([]);
  const getHouses = async () => {
    try {
      const { data } = await customAxios("/homes");
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

  const [userInfo, setuserInfo] = useState({});
  const getUserById = async () => {
    try {
      const { data } = await customAxios.get(`/users/${id}`);
      setuserInfo(data.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    getUserById();
  }, []);
  useEffect(() => {
    getHouses();
  }, []);
  useEffect(() => {
    if (user?.id == id) {
      getWishlist();
    }
  }, []);
  return (
    <div
      className="container py-16 sm:px-32"
      style={{ minHeight: "calc(100vh - 70.94px)" }}
    >
      <div className="my-10 rounded-xl border-2 border-buttonColor bg-white p-3">
        <p className="border-b border-buttonColor pb-1 text-center font-bold">
          Profile
        </p>
        <div className="flex flex-col-reverse items-center justify-between gap-x-32 px-4 py-6">
          <div className="flex w-full flex-col items-center justify-between gap-3 md:flex-row-reverse">
            <div className="flex h-36 w-36 overflow-hidden rounded-full">
              <img src={userInfo?.profileImage} alt="avatar" className="" />
            </div>
            <div className="flex flex-col gap-1">
              <p>
                <span className="font-bold">username:</span>{" "}
                {userInfo?.username}
              </p>
              <p>
                <span className="font-bold">Email:</span> {userInfo?.email}
              </p>
            </div>
          </div>
        </div>
      </div>

      {user?.id == id && (
        <div className="my-10 rounded-xl border-2 border-buttonColor bg-white p-3">
          <p className="border-b border-buttonColor pb-1 text-center font-bold">
            Your Wishlist
          </p>
          <>
            <div className="mt-12 flex gap-6">
              <div className="w-full">
                <div className="mx-12 my-6 flex flex-wrap items-center justify-center gap-12">
                  {wishlist?.length == 0 && (
                    <div
                      className="flex w-full items-center justify-center"
                      style={{ height: "calc(100vh - 350px)" }}
                    >
                      <div className="flex flex-col items-center">
                        <p className="font-bold">No Wishlist Found</p>
                        <p className="mb-3 mt-1 text-center text-sm opacity-70">
                          Go Browse Some Properties And Add To Wishlist
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
                        <PropertyCard property={property} />
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </>
        </div>
      )}
      {user?.id == id && (
        <div className="my-10 rounded-xl border-2 border-buttonColor bg-white p-3">
          <p className="border-b border-buttonColor pb-1 text-center font-bold">
            Your Properties
          </p>
          <>
            <div className="mt-12 flex gap-6">
              <div className="w-full">
                <div className="mx-12 my-6 flex flex-wrap items-center justify-center gap-12">
                  {wishlist?.length == 0 && (
                    <div
                      className="flex w-full items-center justify-center"
                      style={{ height: "calc(100vh - 350px)" }}
                    >
                      <div className="flex flex-col items-center">
                        <p className="font-bold">No Properties Found</p>
                        <p className="mb-3 mt-1 text-center text-sm opacity-70">
                          Go And Add Some Properties
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
                        <PropertyCard property={property} />
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
        {user?.id == id && (
          <button
            onClick={(e) => logoutHandler(e)}
            className="flex items-center gap-4 rounded-xl bg-buttonColor px-6 py-2 text-white"
          >
            Logout
            <span className="text-2xl">
              <FaPersonWalkingArrowRight />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};
export default Profile;
