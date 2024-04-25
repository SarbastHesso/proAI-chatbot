import {Link} from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo-wrapper">
          <img src={logo} alt="proAI-logo" />
        </div>
      </Link>
    </div>
  );
}

export default Header