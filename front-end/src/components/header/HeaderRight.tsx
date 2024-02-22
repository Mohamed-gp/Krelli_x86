import { FaArrowRight, FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function HeaderRight() {
  return (
    <>
      <FaBars className=""/>
      <div className="items-center hidden gap-4 lg:flex">
        <Link
          to="/login"
          className="flex gap-1 items-center text-primaryColor w-[120px] border-2 py-2 px-3 rounded-lg justify-center"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="flex gap-1 items-center bg-primaryColor w-[120px] text-white py-2 px-3 rounded-lg justify-center"
        >
          <p>JOIN US</p>
          <FaArrowRight />
        </Link>
      </div>
    </>
  );
}
