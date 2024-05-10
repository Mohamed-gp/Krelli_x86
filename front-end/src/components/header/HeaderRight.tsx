import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../../store/slices/authSlice";
import { TbLogout } from "react-icons/tb";
import { IRootState } from "../../store/store";
import customAxios from "../../utils/axios";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa6";

const HeaderRight = () => {
  const user = useSelector((state: IRootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const logoutHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(authActions.logout());
      const { data } = await customAxios.get("/auth/logout");
      navigate("/")
      toast.success(data);
      
      
    } catch (error: any) {
      toast.error(error.message);
      console.log(error.message);
    }
  };
  return (
    <div className="lg:flex hidden items-center gap-2 w-[126px] justify-end ">
      {!user && (
        <>
          <Link
            to="/login"
            className="cursor-pointer  text-white px-6 py-1 rounded-xl bg-[#4561EC] duration-300 hover:scale-105 "
          >
            Login
          </Link>
          <Link
            to="/register"
            className="cursor-pointer   text-white px-6 py-1 rounded-xl bg-[#4561EC] duration-300 hover:scale-105 "
          >
            Register
          </Link>
        </>
      )}
      {user && (
        <div className="flex items-center gap-3">
          <Link to="/profile/:id" className="md:text-xl  text-buttonColor">
            <FaUser />
          </Link>
          <p className="w-[2px] h-6 bg-buttonColor"></p>
          <div
            onClick={(e) => logoutHandler(e)}
            className="cursor-pointer flex gap-2 items-center text-white px-6 py-1 rounded-xl bg-[#4561EC] duration-300 hover:scale-105 "
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
