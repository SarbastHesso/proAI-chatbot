import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [signupError, setSignupError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [welcomeMsg, setWelcomeMsg] = useState(null);
  const navigate = useNavigate();

  const register = async (email, password) => {
    setSignupError("");
    try {
      const response = await axios.post("http://localhost:8000/signup", {
        email,
        password,
      });
      setSignupError("");
      login(email, password);
      return response.data.message;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.detail) {
        const errorMessage = Array.isArray(error.response.data.detail)
          ? error.response.data.detail[0].msg
          : error.response.data.detail;
        setSignupError(errorMessage);
        throw new Error(errorMessage);
      } else {
        setSignupError("An unexpected error occurred");
        throw new Error("An unexpected error occurred");
      }
    }
  };

  const login = async (email, password) => {
    setLoginError("");
    const userName = email.split("@")[0];
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      setLoginError("");
      navigate("/chatbot");
      setIsLoggedIn(true);
      setWelcomeMsg(`Hello ${userName}`);
      return response.data.message;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.detail) {
        const errorMessage = error.response.data.detail;
        setLoginError(errorMessage);
        throw new Error(errorMessage);
      } else if (error.response && error.response.status === 404) {
        setLoginError("User not found");
        throw new Error("User not found");
      } else if (error.response && error.response.status === 400) {
        setLoginError("Invalid password");
        throw new Error("Invalid password");
      } else {
        setLoginError("An unexpected error occurred");
        throw new Error("An unexpected error occurred");
      }
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setWelcomeMsg(null);
    console.log("Waiting for implementing in backend");
  };



  const contextValue = {
    register,
    login,
    logout,
    signupError,
    loginError,
    isLoggedIn,
    welcomeMsg,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
