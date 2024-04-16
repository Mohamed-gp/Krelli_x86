import { useState } from "react";
import { Link, NavLink } from "react-router-dom";


interface HeaderCenterProps {
  open : boolean
}
const HeaderCenter = ({open} : HeaderCenterProps) => {
  // 100%
  // polygon(0 0, 100% 0%, 100% 100%, 0% 100%
  // 0%
  // polygon(0 0, 0 0, 0 100%, 0% 100%
  return (
    <nav style={open ? {clipPath : "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)"} : {clipPath : "polygon(0 0, 100% 0%, 100% 0, 0 0)"}} className="lg:relative absolute right-8 lg:w-auto w-[200px] lg:p-0 p-4 lg:top-0 rounded-2xl top-[100px] duration-300 z-10 bg-white">
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
        <li>
          <NavLink
            className="cursor-pointer navigation-header-link"
            to="/profile/chat/:id"
          >
            Chat
          </NavLink>
        </li>
        <li>
          <NavLink
            className="cursor-pointer navigation-header-link"
            to="/profile/dashBoard/:id"
          >
            DashBoard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default HeaderCenter;
