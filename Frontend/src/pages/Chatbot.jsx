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
        <div className="chatbot-header">
          <h2>ProAI Chatbot</h2>
          {isLoggedIn && <h3 className="weclome-msg">{welcomeMsg}</h3>}
        </div>
        <div className="chatbot-main">
          <div className="chat-conversation">
            <h2>How can I help you?</h2>
            <div className="conversation-item">
              <p className="question">my question</p>
              <p className="answer">The answer from ProAI Chat</p>
            </div>
            <div className="conversation-item">
              <p className="question">my question</p>
              <p className="answer">The answer from ProAI Chat</p>
            </div>
            <div className="conversation-item">
              <p className="question">my question</p>
              <p className="answer">The answer from ProAI Chat</p>
            </div>
            <div className="conversation-item">
              <p className="question">my question</p>
              <p className="answer">The answer from ProAI Chat</p>
            </div>
            <div className="conversation-item">
              <p className="question">my question</p>
              <p className="answer">The answer from ProAI Chat</p>
            </div>
            <div className="conversation-item">
              <p className="question">my question</p>
              <p className="answer">The answer from ProAI Chat</p>
            </div>
            <div className="conversation-item">
              <p className="question">my question</p>
              <p className="answer">The answer from ProAI Chat</p>
            </div>
            <div className="conversation-item">
              <p className="question">my question</p>
              <p className="answer">The answer from ProAI Chat</p>
            </div>
            <div className="conversation-item">
              <p className="question">my question</p>
              <p className="answer">The answer from ProAI Chat</p>
            </div>
            <div className="conversation-item">
              <p className="question">my question</p>
              <p className="answer">The answer from ProAI Chat</p>
            </div>
            <div className="conversation-item">
              <p className="question">my question</p>
              <p className="answer">The answer from ProAI Chat</p>
            </div>
            <div className="conversation-item">
              <p className="question">my question</p>
              <p className="answer">The answer from ProAI Chat</p>
            </div>
          </div>
          <form>
            <input type="text" />
            <button>go</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chatbot