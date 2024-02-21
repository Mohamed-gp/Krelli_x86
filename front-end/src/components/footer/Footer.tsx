import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-list">
          <li>
            <h4>About Medical</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vero
              iure optio eaque deleniti magni!
            </p>
            <div className="contact-us">
              <p>(213) 658-3916</p>
              <span>or</span>
              <p>shopily@contact.io</p>
            </div>
          </li>
          <li>
            <h4>Company</h4>
            <p>About</p>
            <p>Features</p>
            <p>Contact</p>
          </li>
          <li>
            <h4>Help</h4>
            <p>Customer Support</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </li>
          <li>
            <h4>My Account</h4>
            <Link to={"/cart"}>
              <p>Shoping Cart</p>
            </Link>
            <Link to={"/favorite"}>
              <p>Favorites Page</p>
            </Link>
          </li>
          <li>
            <h4>Download Our Mobile App</h4>
            <div className="mobile-app">
              <div className="google">
                {/* <img src={googleDownload} alt="" /> */}
                <div className="txt">
                  <span>Download on the</span>
                  <h5>Google Play</h5>
                </div>
              </div>
              <div className="apple">
                {/* <img src={appleDownload} alt="" /> */}
                <div className="txt">
                  <span>Download on the</span>
                  <h5>App Store</h5>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <hr />
        <div className="footer-links">
          <ul className="social-links">
            <li>
              <BsFacebook />
            </li>
            <li>
              <BsInstagram />
            </li>
            <li>
              <BsTwitter />
            </li>
            <li>
              <BsPinterest />
            </li>
          </ul>
          <div className="copy">
            <p>Shopily eCommarce &copy; . All Right Reserved</p>
          </div>
          <ul className="pay-list">
            {/* <img src={applePay} alt="" />
            <img src={visaPay} alt="" />
            <img src={masterCard} alt="" /> */}
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
