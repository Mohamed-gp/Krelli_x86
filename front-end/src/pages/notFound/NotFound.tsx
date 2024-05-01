import { FaHouse } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center  text-buttonColor" style={{height : "calc(100vh - 84.14px)"}}>
      <div className=" rounded-md flex items-center justify-center mx-4 ">
        <div className="flex flex-col items-center ">
          <img
            className="px-4 max-w-[350px]"
            src="../../../public/Monster 404 Error-amico.svg"
          />
          <h1 className="text-center  text-4xl font-bold  ">
            Page Not Found
          </h1>
          <p className="px-4 text-base my-6 leading-none  text-center text-black opacity-50 ">
            No signal here! we cannot find the page you are looking for
          </p>
          <Link
          to="/"
            className="cursor-pointer flex gap-2 items-center text-white px-6 py-1 rounded-xl bg-[#4561EC] duration-300 hover:scale-105 "
          >
            <span>Go Home</span>
            <FaHouse />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
