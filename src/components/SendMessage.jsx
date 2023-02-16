import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";

const SendMessage = () => {
  const [value, setValue] = useState("");
  // Getting currentUser to grab data for a chatbox
  const { currentUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent sengind an empty message
    if (value.trim() === "") {
      alert("Can't send an empty message");
      return;
    }

    try {
      const { uid, displayName, photoURL } = currentUser;
      // https://firebase.google.com/docs/firestore/manage-data/add-data?hl=en&authuser=0#set_a_document
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        profilePic: photoURL,
        uid,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }
    setValue("");
  };
  return (
    <div className="fixed bottom-0 w-full bg-slate-600 py-8 shadow-lg shadow-lg">
      <form className="containerWrapper flex px-1" onSubmit={handleSubmit}>
        <input
          className="input w-full rounded-lg bg-stone-100 text-slate-600 focus:outline-none"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="w-auto rounded-lg bg-[#242933] px-5 text-sm text-white"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
