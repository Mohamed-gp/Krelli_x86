import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../../store/slices/authSlice";
import { TbLogout } from "react-icons/tb";
import { IRootState } from "../../store/store";
import axios from "axios";
import toast from "react-hot-toast";


const HeaderRight = () => {
  const user = useSelector((state : IRootState) => state.auth.user);
  const dispatch = useDispatch()
  const logoutHandler = async (e) => {
    e.preventDefault()
    try {
      dispatch(authActions.logout())
      const {data} = await axios.get("http://localhost:3000/auth/logout",{
        withCredentials : true
      })
      console.log(data)
      toast.success(data)
    } catch (error) {
      console.log(error) 
    }
  }
  return (
    <div className="lg:flex hidden items-center gap-2 w-[126px] justify-end ">
      {!user && (
        <>
          <Link to="/login" className="cursor-pointer  text-white px-6 py-1 rounded-xl bg-[#4561EC] duration-300 hover:scale-105 ">
            Login
          </Link>
          <Link to="/register" className="cursor-pointer   text-white px-6 py-1 rounded-xl bg-[#4561EC] duration-300 hover:scale-105 ">
            Register
          </Link>
        </>
      )}
      {user && (
        <div onClick={(e) => logoutHandler(e)} className="cursor-pointer flex gap-2 items-center text-white px-6 py-1 rounded-xl bg-[#4561EC] duration-300 hover:scale-105 ">
          <span>Logout</span>
          <TbLogout/>
        </div>
      )}
    </div>
  );
};
export default HeaderRight;
