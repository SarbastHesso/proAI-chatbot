import { useContext, useState} from "react";
import axios from "axios";
import { Context } from "../Context";
import CustomBtn from "../components/CustomBtn";
import "./Chatbot.css";

const Chatbot = () => {
  const { isLoggedIn, welcomeMsg } = useContext(Context);

  const [message, setMessage] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [answer, setAnswer] = useState("");
  const [typing, setTyping] = useState(false);
  const [conversation, setConversation] = useState([
    {message: "The first message", answer: "The first answer"},
    {message: "The second message", answer: "The second answer"},
    {message: "The third message", answer: "The third answer"},
  ]);

  const simulateTypingResponse = (fullResponse) => {
    setAnswer("");
    setTyping(true);
    let index = 0;

    if (fullResponse.length > 0) {
      setAnswer(fullResponse.charAt(0));
      index = 1; // Initialize index at 1 after setting first char
    } else {
      setTyping(false);
      return;
    }

    const intervalId = setInterval(() => {
      if (index < fullResponse.length) {
        setAnswer(
          (currentResponse) => currentResponse + fullResponse.charAt(index)
        );
        index++;
      } else { 
        clearInterval(intervalId);
        setTyping(false);
      }
    }, 25);
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    if (message !== ""){
      try {
        const res = await axios.post("http://localhost:8000/messages/", {
          message,
        });
        simulateTypingResponse(res.data.response);
        // setAnswer(res.data.response)
        setUserMessage(message);
        setMessage("");
        console.log(conversation);
        console.log(message, userMessage);

        if (userMessage, answer){
          const newItem = { userMessage, answer };
          setConversation([...conversation, newItem])
          console.log(message, userMessage);
        }
      } catch (error) {
        console.log(error);
        alert("Error sending message")
      }
    }
  }

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

            {conversation.map((item, index) => (
              <div className="conversation-item" key={index}>
                <div className="question-container">
                  <span>you</span>
                  <p className="question">{item.message}</p>
                </div>
                <div className="answer-container">
                  <span>chatbot</span>
                  <p className="answer">{item.answer}</p>
                </div>
              </div>
            ))}

            <div className="conversation-item">
              <div className="question-container">
                <span>you</span>
                <p className="question">{userMessage}</p>
              </div>
              <div className="answer-container">
                <span>chatbot</span>
                <p className="answer">{answer}</p>
              </div>
            </div>

          </div>
        </div>
        <div className="form-container">
          <form onSubmit={submitHandle}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button>go</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
