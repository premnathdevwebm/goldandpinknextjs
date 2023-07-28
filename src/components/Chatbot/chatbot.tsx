"use client";
import React, { useState, useRef  } from "react";
import Image from "next/image";
import styles from "./Chatbot.module.css";
import logo from "./logo.png";
import { handleSendMessage } from "@/utils/wtiai";

interface ChatMessage {
  sender: string;
  message: string;
}

const Chatbot: React.FC = () => {
  const [showChatbox, setShowChatbox] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSendMessageData = async (userInput: string) => {
    const botResponse = await handleSendMessage(userInput);
    const userMessage: ChatMessage = { sender: "user", message: userInput };
    const botMessage: ChatMessage = { sender: "bot", message: botResponse };
    setChatMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    inputRef.current?.focus();
    inputRef.current!.value = "";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if(inputRef.current?.value){
      await handleSendMessageData(inputRef.current?.value)
    }
    
  };

  return (
    <div className={styles.chatbotcontainer}>
      {!showChatbox ? (
        <button
          className={styles.custombutton}
          onClick={() => setShowChatbox(true)}
        >
          <Image src={logo} alt="Button Icon" className={styles.buttonicon} />
          <span className={styles.buttontext}>Let&lsquo;s Chat</span>
        </button>
      ) : (
        <div className={styles.chatbox}>
          <div className={styles.chatboxheader}>
            <Image src={logo} alt="Button Icon" className={styles.buttonicon} />
            <span className={styles.buttontext}>Let&lsquo;s Chat</span>
            <button
              className={styles.closebutton}
              onClick={() => setShowChatbox(false)}
            >
              X
            </button>
          </div>
          <div className={styles.chatboxcontent}>
          {chatMessages && chatMessages.map((message, index) => (
              <div key={index} className={styles.chatMessage}>
                <span className={styles[message.sender]}>{message.message}</span>
              </div>
            ))}
          </div>
          <form className={styles.chatboxform} onSubmit={handleSubmit}>
            <input
              type="text"
              name="message"
              placeholder="Type your message..."
              className={styles.messageinput}
              ref={inputRef}
            />
            <button type="submit" className={styles.sendbutton}>
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export { Chatbot };
