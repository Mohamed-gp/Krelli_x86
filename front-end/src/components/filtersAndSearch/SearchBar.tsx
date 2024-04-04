import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoFilterSharp } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="container my-6">
      <div className=" border-2 w-[300px] mx-auto rounded-xl flex  items-center bg-white">
        <span className="ml-3">
          <FaMagnifyingGlass />
        </span>
        <input
          type="text"
          placeholder="Search for a place"
          className="p-3 pl-4 text-black rounded-full focus:outline-none"
        />
        <span className="ml-3 cursor-pointer">
          <IoFilterSharp />
        </span>
      </div>
    </div>
  );
};
export default SearchBar;
