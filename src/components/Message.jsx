import React from "react";

const Message = ({ message }) => {
  return (
    <>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="" />
          </div>
        </div>
        <div className="chat-header">{message.userName}</div>

        <div className="chat-bubble">{message.messageText}</div>
      </div>
    </>
  );
};

export default Message;
