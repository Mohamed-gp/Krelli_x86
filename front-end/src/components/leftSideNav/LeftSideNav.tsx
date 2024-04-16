import { FaHeart } from "react-icons/fa6";
import { IoMdChatbubbles } from "react-icons/io";
import { MdWindow } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { LuChevronsLeftRight } from "react-icons/lu";
import { useEffect, useState } from "react";

const LeftSideNav = () => {
  const [open, setopen] = useState(false);
  useEffect(() => {
    console.log(open)
  },[open])
  return (
    <div  className={` bg-white  px-2 py-4 gap-6  rounded-xl md:px-6 relative`}>
      <div
        
        className={` relative flex flex-col   px-2 py-4 gap-6  md:min-w-[160px] duration-300`}
      >
        <NavLink
          to="/profile/dashboard/:id"
          className="flex gap-2 items-center md:py-1 md:pl-3 p-2 rounded-xl left-nav-link"
        >
          <MdWindow />
          <p className="md:block hidden">DashBoard</p>
        </NavLink>
        <NavLink
          to="/profile/favorites/:id"
          className=" flex gap-2 items-center md:py-1 md:pl-3 p-2 rounded-xl left-nav-link"
        >
          <FaHeart />
          <p className="md:block hidden">Favorites</p>
        </NavLink>
        <NavLink
          to="/profile/chat/:id"
          className=" flex gap-2 items-center md:py-1 md:pl-3 p-2 rounded-xl left-nav-link"
        >
          <IoMdChatbubbles />
          <p className="md:block hidden">Chat</p>
        </NavLink>
      </div>
        {/* <div onClick={() => {setopen(prev => !prev)}} className="absolute md:-right-[22px] text-xl -right-4 p-2 rounded-full md:text-3xl top-56 font-bold bg-white cursor-pointer">
          <LuChevronsLeftRight />
        </div> */}
    </div>
  );
};
export default LeftSideNav;
