import HeaderCenter from "./HeaderCenter";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CloseMenu from "../closeMenu/CloseMenu";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  const [open, setopen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setopen(false);
  }, [location]);

  return (
    <>
      <header className="bg-white">
        <div className="container relative flex items-center justify-between py-6">
          <HeaderLeft />
          <HeaderCenter open={open} setopen={setopen} />
          <HeaderRight />
          <BurgerMenu open={open} setopen={setopen} />
        </div>
      </header>
      <CloseMenu open={open} setopen={setopen} />
    </>
  );
};
export default Header;
