import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../../store/slices/authSlice";
import { TbLogout } from "react-icons/tb";
import { IRootState } from "../../store/store";
import customAxios from "../../utils/axios";
import toast from "react-hot-toast";
import { FaGear, FaUser } from "react-icons/fa6";

const HeaderRight = () => {
  const user = useSelector((state: IRootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(authActions.logout());
      const { data } = await customAxios.get("/auth/logout");
      navigate("/");
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
  return (
    <div className="hidden w-[126px] items-center justify-end gap-2 xl:flex">
      {!user && (
        <>
          <Link
            to="/login"
            className="cursor-pointer bg-[#4561EC] px-6 py-1 text-white duration-300 hover:scale-105"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="cursor-pointer bg-[#4561EC] px-6 py-1 text-white duration-300 hover:scale-105"
          >
            Register
          </Link>
        </>
      )}
      {user && (
        <div className="flex items-center gap-3">
          <Link
            to={`/settings/${user?.id}`}
            className="text-buttonColor md:text-xl"
          >
            {/* <FaUser /> */}
            <FaGear className="duration-1000 hover:rotate-180 hover:scale-110" />
          </Link>
          <p className="h-6 w-[2px] bg-buttonColor"></p>
          <div
            onClick={(e) => logoutHandler(e)}
            className="flex cursor-pointer items-center gap-4 bg-[#4561EC] px-6 py-2 text-white duration-300 hover:scale-[1.03]"
          >
            <span>Logout</span>
            <TbLogout />
          </div>
        </div>
      )}
    </div>
  );
};
export default HeaderRight;
