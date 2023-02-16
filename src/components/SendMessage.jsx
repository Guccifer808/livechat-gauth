import React, { useState } from "react";

const SendMessage = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
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
