import React from "react";
import { UserAuth } from "../context/AuthContext";

const Message = ({ message }) => {
  const { currentUser } = UserAuth();
  return (
    <>
      <div
        className={`chat ${
          message.uid === currentUser.uid ? "chat-end" : "chat-start"
        }`}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={message.profilePic} />
          </div>
        </div>
        <div className="chat-header">{message.name}</div>

        <div className="chat-bubble">{message.text}</div>
      </div>
    </>
  );
};

export default Message;
