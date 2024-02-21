import Nav from "../nav/Nav";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const Header = () => {
  return (
    <>
      <header className="py-5 bg-bgheroColor ">
        <div className="container flex items-center justify-between">
          <HeaderLeft />
          <Nav />
          <HeaderRight />
        </div>
      </header>
    </>
  );
};
export default Header;
