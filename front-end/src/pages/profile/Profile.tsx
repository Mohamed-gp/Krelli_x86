import { Link } from "react-router-dom";
import { FaDoorOpen, FaPersonWalkingArrowRight } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/slices/authSlice";
import customAxios from "../../utils/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IRootState } from "../../store/store";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  return (
    <div
      className="container py-16"
      style={{ minHeight: "calc(100vh - 70.94px)" }}
    >
      <div className="my-10 rounded-xl border-2 border-buttonColor p-3">
        <p className="border-b border-buttonColor pb-1 font-bold text-center">
          Profile
        </p>
        <div className="flex flex-col-reverse items-center justify-between gap-x-32 px-4 py-6">
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="rounded-full w-36 h-36 overflow-hidden">
              <img
                src="../../../public/profile.jpg"
                alt="avatar"
                className=""
              />
            </div>
            <div className="flex gap-1">
              <p>{user?.firstName}</p>
              <p>{user?.firstName}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 rounded-xl border-2 border-buttonColor p-3">
        <p className="border-b border-buttonColor pb-1 font-bold text-center">
          Your Properties
        </p>
        <div
          className="flex justify-center items-center w-full"
          style={{ height: "calc(100vh - 350px)" }}
        >
          <div className="flex flex-col items-center">
            <p className="font-bold text-xl text-center">No Property Found</p>
            <p className="opacity-70 text-sm mt-1 mb-3 text-center">
              Try Renting A Property
            </p>
            <div className="flex gap-2 flex-wrap justify-center">
              <Link
                to="/#addProperty"
                className="border-2 max-w-[260px] font-bold border-black px-6 py-2 rounded-xl text-center cursor-pointer"
              >
                Rent A House
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 rounded-xl border-2 border-buttonColor p-3">
        <p className="border-b border-buttonColor pb-1 font-bold text-center">
          Your Wishlist
        </p>
        <div
          className="flex justify-center items-center w-full"
          style={{ height: "calc(100vh - 350px)" }}
        >
          <div className="flex flex-col items-center">
            <p className="font-bold text-xl text-center">No Property Found</p>
            <p className="opacity-70 text-sm mt-1 mb-3 text-center">
              Your Wishlist Is Empty
            </p>
            <div className="flex gap-2 flex-wrap justify-center">
              <Link
                to="/#addProperty"
                className="border-2 max-w-[300px] font-bold border-black px-6 py-2 rounded-xl text-center cursor-pointer"
              >
                Try Adding Some Property To Your Wishlist
              </Link>
            </div>
          </div>
        </div>
      </div>
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
