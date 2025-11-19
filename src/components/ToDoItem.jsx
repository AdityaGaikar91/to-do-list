import { Check, Edit2, Trash2, X } from 'lucide-react';
import React, { useState } from 'react'


const ToDoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const handleEdit = () => {
    if (editValue.trim() && editValue !== todo.text) {
      onEdit(todo.id, editValue);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(todo.text);
    setIsEditing(false);
  };

  return (
    <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
      <div className="flex items-center gap-3">
        {/* Complete Button */}
        <button
          onClick={() => onToggle(todo.id)}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
            todo.completed
              ? 'bg-green-500 border-green-500'
              : 'border-gray-300 hover:border-green-500'
          }`}
        >
          {todo.completed && <Check size={16} className="text-white" />}
        </button>

        {/* Task Text or Edit Input */}
        <div className="flex-1">
          {isEditing ? (
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleEdit();
                if (e.key === 'Escape') handleCancel();
              }}
              className="w-full px-3 py-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              autoFocus
            />
          ) : (
            <span
              className={`text-lg ${
                todo.completed
                  ? 'line-through text-gray-400'
                  : 'text-gray-800'
              }`}
            >
              {todo.text}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <button
                onClick={handleEdit}
                className="p-2 text-green-600 hover:bg-green-50 rounded transition-colors"
                title="Save"
              >
                <Check size={18} />
              </button>
              <button
                onClick={handleCancel}
                className="p-2 text-gray-600 hover:bg-gray-50 rounded transition-colors"
                title="Cancel"
              >
                <X size={18} />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                title="Edit"
              >
                <Edit2 size={18} />
              </button>
              <button
                onClick={() => onDelete(todo.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                title="Delete"
              >
                <Trash2 size={18} />
              </button>
            </>
          )}
        </div>
      </div>
    </li>
  );
};


export default ToDoItem
