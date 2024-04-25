import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import Chatbot from "./pages/Chatbot";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from './components/Header';

function App() {

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
