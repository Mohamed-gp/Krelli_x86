import HeaderCenter from "./HeaderCenter";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CloseMenu from "../closeMenu/CloseMenu";
import BurgerMenu from "./BurgerMenu";
import { useSelector } from "react-redux";

const Header = () => {
  const [open, setopen] = useState(false);
  const user = useSelector(state => state.auth.user)
  let location = useLocation();
  useEffect(() => {
    setopen(false);
  }, [location]);

  return (
    <>
      <header className="bg-white">
        <div className="relative container flex items-center lg:items-end justify-between py-6">
          <HeaderLeft />
          <HeaderCenter open={open} />
          <HeaderRight />
          <BurgerMenu open={open} setopen={setopen}/>
        </div>
      </header>
        <CloseMenu open={open} setopen={setopen}/>
    </>
  );
};
export default Header;
