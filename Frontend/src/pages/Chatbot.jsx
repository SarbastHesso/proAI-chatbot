import { useContext, useState, useRef, useEffect } from "react";
import axios from "axios";
import { Context } from "../Context";
import CustomBtn from "../components/CustomBtn";
import "./Chatbot.css";

const Chatbot = () => {
  const { isLoggedIn, welcomeMsg } = useContext(Context);

  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");
  const [typing, setTyping] = useState(false);

  const [conversation, setConversation] = useState([]);

  const lastConversationItemRef = useRef(null);


  const [saveChatHistory, setSaveChatHistory] = useState(true);
  const [chatHistory, setChatHistory] = useState([]);
  const [selectedChatIndex, setSelectedChatIndex] = useState(null);

    const toggleSaveChatHistory = () => {
      setSaveChatHistory(!saveChatHistory);
    };

  const simulateTypingResponse = (fullResponse) => {
    setAnswer("");
    setTyping(true);
    let index = 0;

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
    if (message !== "") {
      try {
        const res = await axios.post("http://localhost:8000/messages/", {
          message,
        });
        simulateTypingResponse(res.data.response);
        const newItem = { message: message, answer: res.data.response };
        setConversation([...conversation, newItem]);
          if (isLoggedIn && saveChatHistory){
            localStorage.setItem(
              "conversation",
              JSON.stringify([...conversation, newItem])
            );
          }
        setMessage("");
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.detail
        ) {
          alert(error.response.data.detail);
        } else {
          console.log(error);
          alert("Error sending message. Please try again."); 
        }
      }
    } else {
      alert("Please enter a message before sending."); 
    }
  };


   const newChatClick = () => {
     if (isLoggedIn && saveChatHistory) {
       setChatHistory((prevChatHistory) => {
         const updatedHistory = [...prevChatHistory];
         if (selectedChatIndex !== null) {
           updatedHistory[selectedChatIndex] = conversation;
         } else {
           chatHistory.unshift(conversation);
         }
         localStorage.setItem("chatHistory", JSON.stringify(updatedHistory));
         return updatedHistory;
       });
     }
     setTyping(false);
     setConversation([]);
     setSelectedChatIndex(null);
     localStorage.removeItem("conversation");
   };

  const openChatCard = (index) => {
    if (selectedChatIndex !== null) {
      // Save the current conversation state to the chatHistory before opening a new card
      setChatHistory((prevChatHistory) => {
        const updatedHistory = [...prevChatHistory];
        updatedHistory[selectedChatIndex] = conversation;
        localStorage.setItem("chatHistory", JSON.stringify(updatedHistory));
        return updatedHistory;
      });
    }
    setConversation(chatHistory[index]);
    setSelectedChatIndex(index);
  }

  const deleteChatCard = (index) => {
    if (selectedChatIndex === index) {
      setConversation([]);
      setSelectedChatIndex(null);
    }
    setChatHistory((prevChatHistory) => {
      const updatedHistory = prevChatHistory.filter((_, i) => i !== index);
      localStorage.setItem("chatHistory", JSON.stringify(updatedHistory));
      return updatedHistory;
    });
  };

  useEffect(() => {
    if (lastConversationItemRef.current) {
      lastConversationItemRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversation]); 

  useEffect(() => {
    const conversationFromLocalStorage = localStorage.getItem("conversation");
    if (conversationFromLocalStorage && isLoggedIn) {
      setConversation(JSON.parse(conversationFromLocalStorage));
    }
    const chatHistoryFromLocalStorage = localStorage.getItem("chatHistory");
    if (chatHistoryFromLocalStorage && isLoggedIn) {
      setChatHistory(JSON.parse(chatHistoryFromLocalStorage));
    }
  }, [isLoggedIn]);


  return (
    <div className="chatbot">
      <div className="chat-history-cards">
        <div className="btn-container">
          <CustomBtn txt="New Chat" bgColor="#cfcfcf" onClick={newChatClick} />
        </div>
        {isLoggedIn && (
          <div className="cards">
            {chatHistory.map((chatItem, chatIndex) => (
              <div className="card" key={chatIndex}>
                {chatItem.length > 0 && (
                  <p onClick={() => openChatCard(chatIndex)}>
                    {chatItem[0].message}
                  </p>
                )}
                <button onClick={() => deleteChatCard(chatIndex)}>del</button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="action">
        <div className="chatbot-header">
          <h2>ProAI Chatbot</h2>
          {isLoggedIn && (
            <div className="user-name-check">
              <h3 className="weclome-msg">{welcomeMsg}</h3>
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="saveChatCheckbox"
                  name="saveChatCheckbox"
                  checked={!saveChatHistory}
                  onChange={toggleSaveChatHistory}
                />
                <label htmlFor="saveChatCheckbox">
                  Don&apos;t save the chat
                </label>
              </div>
            </div>
          )}
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
                  {index === conversation.length - 1 && typing ? (
                    <p
                      className="answer"
                      ref={
                        index === conversation.length - 1
                          ? lastConversationItemRef
                          : null
                      }
                    >
                      {answer}
                    </p>
                  ) : (
                    <p
                      className="answer"
                      ref={
                        index === conversation.length - 1
                          ? lastConversationItemRef
                          : null
                      }
                    >
                      {item.answer}
                    </p>
                  )}
                </div>
              </div>
            ))}
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
