import { Link } from "react-router-dom";

const HeaderCenter = () => {
  return (
    <nav>
      <ul className="flex items-center gap-4">
        <li>
          <Link className="font-bold cursor-pointer active" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="cursor-pointer active" to="/find">
            Find
          </Link>
        </li>
        <li>
          <Link className="cursor-pointer active" to="/chat">
            Chat
          </Link>
        </li>
        <li>
          <Link className="cursor-pointer active" to="/dashBoard">
            DashBoard
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default HeaderCenter;
