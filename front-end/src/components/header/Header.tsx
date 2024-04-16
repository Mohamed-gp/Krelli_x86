import { FaBars } from "react-icons/fa6";
import HeaderCenter from "./HeaderCenter";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [open, setopen] = useState(false);
  let location = useLocation();
  useEffect(() => {
    console.log("current location is ",location)
    setopen(false)
  },[location])

  
  return (
    <>
      <header className="bg-white">
        <div className="relative container flex items-center lg:items-end justify-between py-6">
          <HeaderLeft />
          <HeaderCenter open={open} />
          <HeaderRight />
          <span
            className="lg:hidden inline-block cursor-pointer z-10"
            onClick={() => setopen((prev) => !prev)}
          >
            <FaBars />
          </span>
        </div>
      </header>
      {open && (
        <div
          className="absolute w-screen h-full bg-transparent left-0 top-0 z-[1]"
          onClick={() => {
            setopen(false)
          }}
        ></div>
      )}
    </>
  );
};
export default Header;
