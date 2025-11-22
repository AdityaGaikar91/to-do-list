import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, onToggle, onDelete, onEdit }) => {
  return (
    <ul className="space-y-4">
      {todos.map((t) => (
        <ToDoItem
          key={t.id}
          todo={t}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default ToDoList;