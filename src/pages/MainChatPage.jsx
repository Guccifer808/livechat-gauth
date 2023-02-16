import React from "react";
import ChatBox from "../components/ChatBox";
import SendMessage from "../components/SendMessage";

const MainChatPage = () => {
  return (
    <div
      className="bg-gradient-radial pb-20 pt-16"
      style={{ backgroundSize: "5px 5px" }}
    >
      <ChatBox />
      <SendMessage />
    </div>
  );
};

export default MainChatPage;
