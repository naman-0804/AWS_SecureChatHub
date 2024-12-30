import React, { useState, useEffect } from "react";
import WebSocketService from "./websocket.js";

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const webSocket = new WebSocketService("wss://YOUR_WEBSOCKET_API_URL");

  useEffect(() => {
    webSocket.connect();

    webSocket.onMessage((data) => {
      setMessages((prev) => [...prev, data]);
    });
  }, []);

  const sendMessage = () => {
    webSocket.sendMessage({ content: message });
    setMessage("");
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg.content}</p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatBox;
