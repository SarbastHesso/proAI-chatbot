import { Link } from "react-router-dom";
import { useState } from "react";
import CustomBtn from "../components/CustomBtn";
import "./Signup.css";
import { useContext } from "react";
import { Context } from "../Context";

const Signup = () => {
  const { register, signupError} = useContext(Context);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const toggleTerms = () => {
    setTermsAccepted(!termsAccepted); 
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform registration
    register(userName, email, password, confPassword, termsAccepted)
      .then(() => {
        // Clear form fields on successful registration
        setUserName("");
        setEmail("");
        setPassword("");
        setConfPassword("");
      })
      .catch((error) => {
        // Error handling is already done in the register function
        console.error("Registration error:", error);
      });
  };

  return (
    <div className="signup">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
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
          <div className="form-group">
            <label htmlFor="conf-password">Confirm password</label>
            <input
              type="password"
              id="confPassword"
              name="confPassword"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
              autoComplete="password"
            />
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="termsCheckbox"
              name="termsCheckbox"
              checked={termsAccepted}
              onChange={toggleTerms}
            />
            <label htmlFor="termsCheckbox">I accept terms and conditions</label>
          </div>
          {signupError && <div className="error-message">{signupError}</div>}
          <div className="btn-cotainer">
            <CustomBtn txt="Sign up" bgColor="#0764b8" />
          </div>
        </form>
        <div className="login-link-container">
          <p>Already have an account?</p>
          <Link to="/login" className="login-link">
            Login
          </Link>
        </div>
        {/* <div className="separator">
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <div className="btn-cotainer">
          <CustomBtn
            txt="Continue with Google"
            color="#095b56"
            bgColor="#000000"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Signup;
