import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="contact">
        <Link to="mailto:info@proai.us">
          <i className="fa-solid fa-envelope"></i> info@proai.us
        </Link>
        <Link to="tel:+4648088887">
          <i className="fa-solid fa-phone"></i> +4648088887
        </Link>
        <Link to="https://proai.us/" target="blank">
          <div className="logo-wrapper">
            <img src={logo} alt="proAI-logo" />
          </div>
          Explore our website
        </Link>
      </div>
      <div className="legal">
        <Link to="#">Privacy</Link>
        <Link to="#">Help</Link>
      </div>
    </nav>
  );
};

export default Nav;
