import React, { useState } from "react";
import { Check, Edit2, Trash2, X } from "lucide-react";

const ToDoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(todo.text);

  const handleSave = () => {
    if (value.trim()) {
      onEdit(todo.id, value);
      setEdit(false);
    }
  };

  const handleCancel = () => {
    setValue(todo.text);
    setEdit(false);
  };

  return (
    <li className="flex items-center justify-between p-4 mb-3 rounded-xl bg-white/60 border border-white/50 shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-200 group">
      <div className="flex items-center gap-4 w-full">
        <button
          onClick={() => onToggle(todo.id)}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
            todo.completed 
              ? "bg-green-500 border-green-500 scale-110" 
              : "border-gray-300 hover:border-purple-400"
          }`}
        >
          {todo.completed && <Check className="text-white" size={14} strokeWidth={3} />}
        </button>

        {edit ? (
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
            className="flex-1 px-3 py-2 bg-white/50 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-800"
            autoFocus
          />
        ) : (
          <span
            className={`text-lg flex-1 transition-all duration-200 ${
              todo.completed ? "line-through text-gray-400 decoration-gray-400" : "text-gray-700 font-medium"
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-4">
        {edit ? (
          <>
            <button 
              onClick={handleSave} 
              className="text-green-600 hover:bg-green-100 p-2 rounded-lg transition-colors"
              title="Save"
            >
              <Check size={18} />
            </button>
            <button 
              onClick={handleCancel} 
              className="text-gray-500 hover:bg-gray-200 p-2 rounded-lg transition-colors"
              title="Cancel"
            >
              <X size={18} />
            </button>
          </>
        ) : (
          <>
            <button 
              onClick={() => setEdit(true)} 
              className="text-blue-500 hover:bg-blue-50 p-2 rounded-lg transition-colors"
              title="Edit"
            >
              <Edit2 size={18} />
            </button>
            <button 
              onClick={() => onDelete(todo.id)} 
              className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
              title="Delete"
            >
              <Trash2 size={18} />
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default ToDoItem;