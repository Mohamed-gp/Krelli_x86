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
import { AiFillPrinter } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-40">
      <div className="container flex items-center py-6 justify-between border-t-2 border-[#4561EC]">
        <div className="">
          <img
            src="../../../public/Krelli LOGO 1.png"
            alt="krelli-logo"
            className="w-[350px] object-fill"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <FaLocationDot />
            <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
          </div>
          <div className="flex items-center ">
            <div className="flex w-[48%] items-center gap-2">
              <FaPhone />
              <p>(123) 456-7890</p>
            </div>
            <div className="flex w-[48%] items-center gap-2">
              <AiFillPrinter />
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
            <FaWifi className="rotate-90" />
          </div>
        </div>
      </div>
      <div className="container flex justify-between py-6 border-t-2">
        <div className="flex justify-between font-semibold gap-6">
          <Link to="/about">About Us</Link>
          <Link to="/about">Contact us</Link>
          <Link to="/about">Help</Link>
          <Link to="/about">Privacy Policy</Link>
          <Link to="/about">Disclaimer</Link>
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
