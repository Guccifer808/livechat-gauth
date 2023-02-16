import Message from "./Message";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect } from "react";

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
  // https://firebase.google.com/docs/firestore/query-data/listen?hl=en&authuser=0#listen_to_multiple_documents_in_a_collection
  useEffect(() => {
    const q = query(collection(db, "messages"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        // messages.push(doc.data().name);
        console.log(doc.data());
      });
    });
  }, []);
  return (
    <div className="containerWrap pb-44 pt-20">
      {message.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
};

export default ChatBox;
