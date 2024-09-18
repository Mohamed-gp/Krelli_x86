import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { authActions } from "../../store/slices/authSlice";
import toast from "react-hot-toast";
import customAxios from "../../utils/axios";
import { IRootState } from "../../store/store";

interface HeaderCenterProps {
  open: boolean;
  setopen: (prev: any) => any;
}
const HeaderCenter = ({ open, setopen }: HeaderCenterProps) => {
  const user = useSelector((state: IRootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await customAxios.get("/auth/logout", {
        withCredentials: true,
      });
      navigate("/");
      toast.success(data);
      dispatch(authActions.logout());
      setopen(false);
    } catch (error: any) {
      toast.error(error.message);
      console.log(error.message);
    }
  };
  return (
    <nav
      style={
        open
          ? { clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }
          : { clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)" }
      }
      className="absolute right-8 top-[100px] z-[999999999999] w-[200px] rounded-2xl bg-white p-4 text-center duration-300 lg:relative lg:right-auto lg:top-auto lg:w-auto lg:p-0"
    >
      <ul className="flex flex-1 flex-col items-center gap-x-10 gap-y-6 lg:flex-row">
        <li className="">
          <NavLink
            className="navigation-header-link hover:text-navActiveColor cursor-pointer hover:text-buttonColor duration-300"
            to="/"
          >
            Home
          </NavLink>
        </li>
        {user?.role == "admin" && (
          <li>
            <NavLink
              className="navigation-header-link hover:text-navActiveColor cursor-pointer hover:text-buttonColor duration-300"
              to="/admin-dashboard"
            >
              Admin
            </NavLink>
          </li>
        )}

        {user && (
          <>
            <li>
              <NavLink
                className="navigation-header-link hover:text-navActiveColor cursor-pointer hover:text-buttonColor duration-300"
                to={`/profile/${user?.id}`}
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navigation-header-link hover:text-navActiveColor cursor-pointer duration-300 hover:text-buttonColor "
                to={`/wishlist/${user?.id}`}
              >
                Wishlist
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navigation-header-link hover:text-navActiveColor cursor-pointer hover:text-buttonColor duration-300"
                to="/profile/chat/"
              >
                Chat
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink
            className="navigation-header-link cursor-pointer duration-300 hover:text-buttonColor"
            to="/properties"
          >
            Find
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navigation-header-link cursor-pointer duration-300 hover:text-buttonColor"
            to="/aboutus"
          >
            About
          </NavLink>
        </li>

        {user && (
          <>
            <li className="sm:hidden">
              <NavLink
                className="navigation-header-link cursor-pointer duration-300 hover:text-buttonColor"
                to={`/settings/${user?.id}`}
              >
                Settings
              </NavLink>
            </li>
            <li className="lg:hidden">
              <span
                className="navigation-header-link cursor-pointer duration-300 hover:text-buttonColor"
                onClick={(e) => logoutHandler(e)}
              >
                Logout
              </span>
            </li>
          </>
        )}
        {!user ? (
          <>
            <li className="lg:hidden">
              <NavLink
                className="navigation-header-link cursor-pointer hover:text-buttonColor"
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li className="lg:hidden">
              <NavLink
                className="navigation-header-link cursor-pointer hover:text-buttonColor"
                to="/register"
              >
                Register
              </NavLink>
            </li>
          </>
        ) : (
          <></>
        )}
      </ul>
    </nav>
  );
};
export default HeaderCenter;
