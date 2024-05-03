import { useContext} from "react";
import { Context } from "../Context";
import CustomBtn from "../components/CustomBtn";
import "./Chatbot.css";

const Chatbot = () => {
  const { isLoggedIn, welcomeMsg } = useContext(Context);


  return (
    <div className="chatbot">
      <div className="chat-history-cards">
        <div className="btn-container">
          <CustomBtn txt="New Chat" bgColor="#cfcfcf" />
        </div>
        <div className="cards">
          <div className="card">Card-1</div>
          <div className="card">Card-2</div>
          <div className="card">Card-3</div>
          <div className="card">Card-3</div>
          <div className="card">Card-3</div>
          <div className="card">Card-3</div>
          <div className="card">Card-3</div>
          <div className="card">Card-3</div>
          <div className="card">Card-3</div>
          <div className="card">Card-3</div>
          <div className="card">Card-3</div>
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
              <div className="question-container">
                <span>you</span>
                <p className="question">  laborum aliquid explicabo. Recusandae delectus maxime voluptas, voluptates ex laudantium?</p>
              </div>
              <div className="answer-container">
                <span>chatbot</span>
                <p className="answer"> adipisicing elit. Dignissimos aut ducimus voluptates quae! Officia natus quaerat, eligendi dolore quos adipisci cupiditate perspiciatis cumque ipsum quasi corporis consequuntur delectus voluptas odit!</p>
              </div>
            </div>
            <div className="conversation-item">
              <div className="question-container">
                <span>you</span>
                <p className="question">vitae, commodi eos, ad dolorum maiores, laborum aliquid explicabo. Recusandae delectus maxime voluptas, voluptates ex laudantium?</p>
              </div>
              <div className="answer-container">
                <span>chatbot</span>
                <p className="answer">r adipisicing elit. Dignissimos aut ducimus voluptates quae! Officia natus quaerat, eligendi dolore quos adipisci cupiditate perspiciatis cumque ipsum quasi corporis consequuntur delectus voluptas odit!</p>
              </div>
            </div>
            <div className="conversation-item">
              <div className="question-container">
                <span>you</span>
                <p className="question">andae cumque consequatur illo cum vitae, commodi eos, ad dolorum maiores, laborum aliquid explicabo. Recusandae delectus maxime voluptas, voluptates ex laudantium?</p>
              </div>
              <div className="answer-container">
                <span>chatbot</span>
                <p className="answer"> adipisicing elit. Dignissimos aut ducimus voluptates quae! Officia natus quaerat, eligendi dolore quos adipisci cupiditate perspiciatis cumque ipsum quasi corporis consequuntur delectus voluptas odit!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="form-container">
          <form >
            <input
              type="text"
            />
            <button>go</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
