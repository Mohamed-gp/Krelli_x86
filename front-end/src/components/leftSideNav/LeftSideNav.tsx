import { FaHeart } from "react-icons/fa6";
import { IoMdChatbubbles } from "react-icons/io";
import { MdWindow } from "react-icons/md";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  return (
    <div className="flex flex-col rounded-xl bg-white px-6 py-6 gap-6 min-w-[250px]">
      <NavLink
        to="/profile/dashboard/:id"
        className="flex gap-2 items-center py-1 pl-3    rounded-xl left-nav-link"
      >
        <MdWindow />
        <p>DashBoard</p>
        <span className="absolute  left-0 h-[30px]  w-[5px]"></span>
      </NavLink>
      <NavLink
        to="/profile/favorites/:id"
        className=" flex gap-2 items-center py-1 pl-3 rounded-xl left-nav-link"
      >
        <FaHeart />
        <p>Favorites</p>
        <span className="absolute  left-0 h-[30px]  w-[5px]"></span>
      </NavLink>
      <NavLink
        to="/profile/chat/:id"
        className=" flex gap-2 items-center  left-nav-link py-1 pl-3 rounded-xl w-full "
      >
        <IoMdChatbubbles />
        <p>Chat</p>
        <span className="absolute  left-0 h-[30px]  w-[5px]"></span>
      </NavLink>
    </div>
  );
};
export default LeftSideNav;
