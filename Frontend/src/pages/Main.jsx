import Auth from "../components/Auth";
import Footer from "../components/Footer";
import Greeting from "../components/Greeting";
import Nav from "../components/Nav";
import "./Main.css";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <main className="main">
      <div className="action">
        <Greeting />
        <Auth />
      </div>
      <div className="info">
        <Nav />
        <Footer />
      </div>
    </main>
  );
}

export default Main;