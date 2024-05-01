import {Link, useLocation} from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./Header.css";
import CustomLink from "./CustomLink";
import { useContext } from "react";
import { Context } from "../Context";

const Header = () => {
  const location = useLocation();
  const isChatbot = location.pathname === '/chatbot';
  const { isLoggedIn, logout } = useContext(Context);

  return (
    <div className="header">
      <Link to="/">
        <div className="logo-wrapper">
          <img src={logo} alt="proAI-logo" />
        </div>
      </Link>
      {isChatbot && (
        <CustomLink
          bgColor="#0764b8"
          txt={isLoggedIn ? "Log out" : "Log in"}
          to={isLoggedIn ? "" : "/login"}
          onClick={isLoggedIn ? logout : null}
        />
      )}
    </div>
  );
}

export default Header