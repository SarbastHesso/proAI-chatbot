import {Link, useLocation} from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./Header.css";
import CustomLink from "./CustomLink";
const Header = () => {
  const location = useLocation();
  const isChatbot = location.pathname === '/chatbot';
  return (
    <div className="header">
      <Link to="/">
        <div className="logo-wrapper">
          <img src={logo} alt="proAI-logo" />
        </div>
      </Link>
      { isChatbot && (
        <CustomLink to='/login' bgColor='#0764b8' txt='Login'/>
      )}
    </div>
  );
}

export default Header