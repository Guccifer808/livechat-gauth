import React from "react";
import Message from "./Message";

const ChatBox = () => {
  const message = [
    {
      id: 1,
      userName: "John",
      messageText: "test message",
    },
    {
      id: 2,
      userName: "Emma",
      messageText: "hello test message",
    },
  ];
  return (
    <div className="containerWrap pb-44 pt-20">
      {message.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
};

export default ChatBox;
