import { Link } from "react-router-dom";
import Logo from "../../../public/Krelli LOGO 1.png";

const HeaderLeft = () => {
  return (
    <Link to="" className="w-[126px] z-[2]">
      <img src={Logo} alt="logg" className="" />
    </Link>
  );
};
export default HeaderLeft;
