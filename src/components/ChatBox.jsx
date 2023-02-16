import Message from "./Message";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useRef, useState } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  //Auto scroll ref, useEffect and func to update scroll when new messages are added
  const messageScrollRef = useRef();
  const sctollToBottom = () => {
    messageScrollRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(sctollToBottom, [messages]);

  // https://firebase.google.com/docs/firestore/query-data/listen?hl=en&authuser=0#listen_to_multiple_documents_in_a_collection
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      // Order messages by date created
      orderBy("createdAt"),
      // Limiting chars
      limit(200)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        //pushing all doc data and id
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe;
  }, []);
  return (
    <div className="containerWrap pb-44 pt-20">
      {messages.map((message) => (
        <Message message={message} key={message.id} />
      ))}
      {/* To add auto scroll for a new messages */}
      <div ref={messageScrollRef}></div>
    </div>
  );
};

export default ChatBox;
