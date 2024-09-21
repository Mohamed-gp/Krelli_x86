import { FaHeart } from "react-icons/fa6";
import { IoMdChatbubbles } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store";

const LeftSideNav = () => {
  const user = useSelector((state: IRootState) => state.auth.user);

  return (
    <div className={`relative gap-6 rounded-xl bg-white px-2 py-4 md:px-6`}>
      <div
        className={`relative flex flex-col gap-6 px-2 py-4 duration-300 md:min-w-[160px]`}
      >
        {/* <NavLink
          to="/profile/dashboard/:id"
          className="flex gap-2 items-center md:py-1 md:pl-3 p-2 rounded-xl left-nav-link"
        >
          <MdWindow />
          <p className="md:block hidden">DashBoard</p>
        </NavLink> */}
        <NavLink
          to={`/wishlist/${user?.id}`}
          className="left-nav-link flex items-center gap-2 rounded-xl p-2 md:py-1 md:pl-3"
        >
          <FaHeart />
          <p className="hidden md:block">Wishlist</p>
        </NavLink>
        <NavLink
          to="/profile/chat"
          className="left-nav-link flex items-center gap-2 rounded-xl p-2 md:py-1 md:pl-3"
        >
          <IoMdChatbubbles />
          <p className="hidden md:block">Chat</p>
        </NavLink>
      </div>
      {/* <div onClick={() => {setopen(prev => !prev)}} className="absolute md:-right-[22px] text-xl -right-4 p-2 rounded-full md:text-3xl top-56 font-bold bg-white cursor-pointer">
          <LuChevronsLeftRight />
        </div> */}
    </div>
  );
};
export default LeftSideNav;
