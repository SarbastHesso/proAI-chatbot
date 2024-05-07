import CustomBtn from "../components/CustomBtn";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import { useContext } from "react";
import { Context } from "../Context";

const Login = () => {
  const { login, loginError } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      login(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="login">
      <div className="login-form">
        <h2>Log in</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="password"
            />
          </div>
          {loginError && <div className="error-message">{loginError}</div>}
          <div className="btn-cotainer">
            <CustomBtn txt="Log in" bgColor="#0764b8" />
          </div>
        </form>
        <div className="signup-link-container">
          <p>Create an account?</p>
          <Link to="/signup" className="signup-link">
            Sign up
          </Link>
        </div>
        {/* <div className="separator">
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <div className="btn-cotainer">
          <CustomBtn txt="Continue with Google" bgColor="#000000" />
        </div> */}
      </div>
    </div>
  );
};

export default Login;
