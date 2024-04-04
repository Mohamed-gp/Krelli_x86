import { Link, NavLink } from "react-router-dom";

const HeaderCenter = () => {
  return (
    <nav>
      <ul className="flex items-center gap-4">
        <li>
          <NavLink className="cursor-pointer navigation-header-link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="cursor-pointer navigation-header-link" to="/properties">
            Find
          </NavLink>
        </li>
        <li>
          <NavLink className="cursor-pointer navigation-header-link" to="/profile/chat/:id">
            Chat
          </NavLink>
        </li>
        <li>
          <NavLink className="cursor-pointer navigation-header-link" to="/dashBoard">
            DashBoard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default HeaderCenter;
