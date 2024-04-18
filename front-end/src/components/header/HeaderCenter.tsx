import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authActions } from "../../store/slices/authSlice";

interface HeaderCenterProps {
  open: boolean;
}
const HeaderCenter = ({ open }: HeaderCenterProps) => {
  const user = useSelector((state) => state.auth.user);

  return (
    <nav
      style={
        open
          ? { clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }
          : { clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)" }
      }
      className="lg:relative absolute right-8 lg:right-auto lg:w-auto w-[200px] lg:p-0 p-4 lg:top-auto rounded-2xl top-[100px] duration-300 z-10 bg-white"
    >
      <ul className="flex lg:flex-row flex-col items-center gap-4 ">
        <li>
          <NavLink className="cursor-pointer navigation-header-link" to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            className="cursor-pointer navigation-header-link"
            to="/properties"
          >
            Find
          </NavLink>
        </li>
        {user && (
          <li>
            <NavLink
              className="cursor-pointer navigation-header-link"
              to="/profile/dashBoard/:id"
            >
              DashBoard
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            className="cursor-pointer navigation-header-link"
            to="/about"
          >
            About
          </NavLink>
        </li>
        {user && (
          <li className="lg:hidden">
            <span
              className="cursor-pointer navigation-header-link"
              onClick={() => authActions.logout()}
            >
              Logout
            </span>
          </li>
        )}
        {!user && (
          <>
            <li>
              <NavLink
                className="cursor-pointer navigation-header-link lg:hidden"
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                className="cursor-pointer navigation-header-link lg:hidden"
                to="/register"
              >
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
export default HeaderCenter;
