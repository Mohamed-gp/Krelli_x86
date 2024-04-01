import { Link } from "react-router-dom";
import Logo from "../../../public/Krelli LOGO 1.png";

const Header = () => {
  return (
    <header className="bg-blue-300">
      <div className="container flex items-end justify-between py-6">
        <div className="w-[126px]">
          <img src={Logo} alt="logg" className="" />
        </div>
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
        <div className="flex items-center gap-2 w-[126px]">
          <button className="cursor-pointer">Login</button>
          <button className="cursor-pointer">Register</button>
        </div>
      </div>
    </header>
  );
};
export default Header;
