import {
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaPinterest,
  FaWifi,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="mt-40">
      <div className="container flex items-center py-6 justify-between border-t-2 border-[#4561EC] flex-col md:flex-row gap-y-4">
        <div className="">
          <img
            src="/Krelli LOGO 1.png"
            alt="krelli-logo"
            className="w-[350px] object-fill"
          />
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex gap-2 items-center">
            <FaLocationDot />
            <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
          </div>
          <div className="flex items-center ">
            <div className="flex  items-center gap-2">
              <FaPhone />
              <p>(123) 456-7890</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <p>SocialMedia </p>
            <FaFacebook />
            <FaXTwitter />
            <FaLinkedin />
            <FaYoutube />
            <FaInstagram />
            <FaGooglePlus />
            <FaPinterest />
            <span className="rotate-45">
              <FaWifi />
            </span>
          </div>
        </div>
      </div>
      <div className="container flex justify-between py-6 border-t-2 border-t-[#4561EC] md:flex-row flex-col  items-center text-center gap-y-8">
        <div className="flex justify-between font-semibold gap-6 md:flex-row flex-col">
          <Link to="/aboutus" className="hover:text-[#4561EC] duration-300">
            About Us
          </Link>
          <HashLink
            to="/aboutus/#contact-us"
            className="hover:text-[#4561EC] duration-300"
          >
            Contact us
          </HashLink>

          {/* <Link to="/about" className="hover:text-[#4561EC] duration-300">
            Help
          </Link>
          <Link to="/about" className="hover:text-[#4561EC] duration-300">
            Privacy Policy
          </Link>
          <Link to="/about" className="hover:text-[#4561EC] duration-300">
            Disclaimer
          </Link> */}
        </div>
        <p className="font-bold opacity-50">
          Copyright © {new Date().getFullYear()} Minimumlivingcost. All rights
          reserved
        </p>
      </div>
    </footer>
  );
};
export default Footer;
