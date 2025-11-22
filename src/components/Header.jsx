import React, { useState } from "react";
import { Plus } from "lucide-react";

const Header = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");

  const submit = () => {
    if (inputValue.trim()) {
      onAdd(inputValue);
      setInputValue("");
    }
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 py-6 px-6 flex justify-center shadow-lg z-10 bg-gradient-to-r from-[#7f53ac] to-[#647dee] text-white"
    >
      <div className="w-full max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-center text-white tracking-wide drop-shadow-md">
          My To-Do List
        </h1>

        <div className="mt-6 flex w-full gap-3 justify-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            placeholder="Add a new task..."
            className="w-full max-w-md px-5 py-3 rounded-xl text-gray-800 bg-white/90 placeholder-gray-500 border-0 shadow-lg focus:ring-4 focus:ring-purple-300/50 focus:outline-none transition-all"
          />

          <button
            onClick={submit}
            className="px-6 py-3 rounded-xl bg-white text-purple-700 font-bold flex items-center gap-2 shadow-lg hover:bg-purple-50 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Plus size={22} strokeWidth={3} /> Add
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;