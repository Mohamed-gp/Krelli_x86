import HeaderCenter from "./HeaderCenter";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";


const Header = () => {
  return (
    <header className="bg-blue-300">
      <div className="container flex items-end justify-between py-6">
        <HeaderLeft/>
        <HeaderCenter/>
        <HeaderRight/>
      </div>
    </header>
  );
};
export default Header;
