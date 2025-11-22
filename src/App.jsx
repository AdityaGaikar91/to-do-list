import React, { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Complete React assignment", completed: false },
    { id: 2, text: "Study for exams", completed: false },
    { id: 3, text: "Build portfolio website", completed: false },
  ]);

  const addTodo = (text) => {
    setTodos([{ id: Date.now(), text, completed: false }, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, text: newText } : t
      )
    );
  };

  const completed = todos.filter((t) => t.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col font-sans text-gray-900">
      <Header onAdd={addTodo} />

      <main className="flex-1 max-w-3xl w-full px-6 mx-auto pt-48 pb-12">
        <div className="grid grid-cols-3 gap-6 mb-10">
          <div className="stat-card">
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Total Tasks</p>
            <h2 className="text-3xl font-bold text-purple-600 mt-1">{todos.length}</h2>
          </div>

          <div className="stat-card">
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Completed</p>
            <h2 className="text-3xl font-bold text-green-500 mt-1">{completed}</h2>
          </div>

          <div className="stat-card">
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Remaining</p>
            <h2 className="text-3xl font-bold text-orange-500 mt-1">{todos.length - completed}</h2>
          </div>
        </div>

        <div className="glass-wrapper p-8 rounded-3xl shadow-2xl mb-8 min-h-[300px]">
          {todos.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full py-12 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <p className="text-xl text-gray-500 font-medium">No tasks yet</p>
              <p className="text-gray-400 mt-2">Add a task above to get started!</p>
            </div>
          ) : (
            <ToDoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} onEdit={editTodo} />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;