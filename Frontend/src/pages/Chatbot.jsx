import { useContext } from "react";
import { Context } from "../Context";
import CustomBtn from "../components/CustomBtn";
import "./Chatbot.css";

const Chatbot = () => {
  const { isLoggedIn, welcomeMsg } = useContext(Context);

  return (
    <div className="chatbot">
      <div className="chat-history-cards">
        <CustomBtn txt="New Chat" bgColor="#cfcfcf" />
        <div className="cards">
          <div className="card">Card-1</div>
          <div className="card">Card-2</div>
          <div className="card">Card-3</div>
        </div>
      </div>
      <div className="action">
        <div className="info">
          {isLoggedIn && <h3 className="weclome-msg">{welcomeMsg}</h3>}
          <h2>How can I help you?</h2>
        </div>
        <div className="response">The response from ProAI Chat</div>
        <form>
          <input type="text" />
          <button>go</button>
        </form>
      </div>
    </div>
  );
}

export default Chatbot