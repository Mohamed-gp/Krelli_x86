import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="hidden lg:block">
        <ul className="flex gap-3 font-bold opacity-60">
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">Product</Link>
          </li>
          <li>
            <Link to="">Pricing</Link>
          </li>
          <li>
            <Link to="">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Nav;
