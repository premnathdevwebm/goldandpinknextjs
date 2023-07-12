"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Chatbot.module.css";
import logo from "./logo.png";

interface ChatMessage {
  sender: string;
  message: string;
}

const Chatbot: React.FC = () => {
  const [showChatbox, setShowChatbox] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const userInput: any = e.currentTarget.elements;

    const chatMessage: ChatMessage = { sender: "user", message: userInput };
    setChatMessages([...chatMessages, chatMessage]);
    e.currentTarget.reset();
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
            {/* Render the chat messages */}
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={
                  message.sender === "user"
                    ? styles.usermessage
                    : styles.botmessage
                }
              >
                {message.message}
              </div>
            ))}
          </div>
          <form className={styles.chatboxform} onSubmit={handleSendMessage}>
            <input
              type="text"
              name="message"
              placeholder="Type your message..."
              className={styles.messageinput}
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
