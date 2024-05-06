import { useContext, useState, useRef, useEffect } from "react";
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

  const [conversation, setConversation] = useState([]);

  const lastConversationItemRef = useRef(null);
  const currentConversationItemRef = useRef(null);


  const [saveChatHistory, setSaveChatHistory] = useState(true);
  const [chatHistory, setChatHistory] = useState([]);

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
        setUserMessage(message);
        if (saveChatHistory){
          localStorage.setItem(
            "conversation",
            JSON.stringify([
              ...conversation,
              { message: message, answer: res.data.response },
            ])
          );
        }
        setMessage("");

        if ((userMessage, answer)) {
          const newItem = { message:userMessage, answer:answer };
          setConversation([...conversation, newItem]);
        }
      } catch (error) {
        console.log(error);
        alert("Error sending message")
      }
    }
  }

  const newChatClick = () => {
    if (saveChatHistory) {
      setChatHistory([conversation, ...chatHistory]);
      localStorage.setItem(
        "chatHistory",
        JSON.stringify([
          ...chatHistory,
          conversation,
        ])
      );
      setConversation([]);
    }
    localStorage.removeItem("conversation");
    // setConversation([]);
  }

  useEffect(() => {
    if (typing){
      currentConversationItemRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      if (lastConversationItemRef.current) {
        lastConversationItemRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [conversation, typing]); 

  useEffect(() => {
    const conversationFromLocalStorage = localStorage.getItem("conversation");
    if (conversationFromLocalStorage) {
      setConversation(JSON.parse(conversationFromLocalStorage));
    }
    const chatHistoryFromLocalStorage = localStorage.getItem("chatHistory");
    if (chatHistoryFromLocalStorage) {
      setChatHistory(JSON.parse(chatHistoryFromLocalStorage));
    }
  }, []);


  return (
    <div className="chatbot">
      <div className="chat-history-cards">
        <div className="btn-container">
          <CustomBtn txt="New Chat" bgColor="#cfcfcf" onClick={newChatClick}/>
        </div>
        <div className="cards">
          {
            chatHistory.map((item, index) => (
              <div className="card" key={index}>{item[0].message}</div>
            ))
          }
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
              <div className="conversation-item" 
              key={index} 
              ref={index === conversation.length ? lastConversationItemRef : null}>
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

            {answer && (
              <div className="conversation-item" ref={currentConversationItemRef}>
                <div className="question-container">
                  <span>you</span>
                  <p className="question">{userMessage}</p>
                </div>
                <div className="answer-container">
                  <span>chatbot</span>
                  <p className="answer">{answer}</p>
                </div>
              </div>
            )}
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
