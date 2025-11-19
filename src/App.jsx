import React, { useState } from 'react'
import Header from './components/Header';
import ToDoList from './components/ToDoList';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Complete React assignment', completed: false },
    { id: 2, text: 'Study for exams', completed: false },
    { id: 3, text: 'Build portfolio website', completed: true }
  ]);

  // Add new todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTodos([newTodo, ...todos]);
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Edit todo
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header onAdd={addTodo} />
      
      <main className="max-w-4xl mx-auto p-6">
        {/* Stats */}
        <div className="mb-6 flex gap-4 justify-center">
          <div className="bg-white px-6 py-3 rounded-lg shadow-md">
            <span className="text-gray-600">Total Tasks: </span>
            <span className="font-bold text-purple-600">{totalCount}</span>
          </div>
          <div className="bg-white px-6 py-3 rounded-lg shadow-md">
            <span className="text-gray-600">Completed: </span>
            <span className="font-bold text-green-600">{completedCount}</span>
          </div>
          <div className="bg-white px-6 py-3 rounded-lg shadow-md">
            <span className="text-gray-600">Remaining: </span>
            <span className="font-bold text-orange-600">{totalCount - completedCount}</span>
          </div>
        </div>

        {/* Todo List */}
        <ToDoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      </main>
    </div>
  );
};

export default App;

