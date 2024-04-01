import { Link } from "react-router-dom";

const HeaderRight = () => {
  return (
    <div className="flex items-center gap-2 w-[126px] justify-end">
      <Link to="/login" className="cursor-pointer">
        Login
      </Link>
      <Link to="/register" className="cursor-pointer">
        Register
      </Link>
    </div>
  );
};
export default HeaderRight;
