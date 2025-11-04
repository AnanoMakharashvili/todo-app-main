import React, { useState } from "react";
import Light from "./assets/bg-mobile-light.jpg";
import Dark from "./assets/bg-mobile-dark.jpg";
import Moon from "./assets/icon-moon.svg";
import Sun from "./assets/icon-sun.svg";

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const [todos, setTodos] = useState([
    { id: 1, text: "Complete online JavaScript course", completed: false },
    { id: 2, text: "Jog around the park 3x", completed: false },
    { id: 3, text: "10 minutes meditation", completed: false },
    { id: 4, text: "Read for 1 hour", completed: false },
    { id: 5, text: "Pick up groceries", completed: false },
    { id: 6, text: "Complete Todo App on Frontend Mentor", completed: false },
  ]);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen p-4 relative font-sans transition-all duration-500 ${
        theme === "light" ? "bg-gray-50" : "bg-[#181824]"
      }`}
    >
      <img
        src={theme === "light" ? Light : Dark}
        alt="background"
        className="absolute top-0 left-0 w-full max-w-[462px] h-[200px] z-0 object-cover"
      />
      <header className="flex flex-row items-center justify-between w-full max-w-md mb-6 p-3 z-10 transform -translate-x-1 -translate-y-14">
        <h1 className="text-4xl font-bold text-white">TODO</h1>

        {theme === "light" ? (
          <img
            src={Moon}
            alt="moon icon"
            className="w-6 h-6 cursor-pointer"
            onClick={toggleTheme}
          />
        ) : (
          <img
            src={Sun}
            alt="sun icon"
            className="w-6 h-6 cursor-pointer"
            onClick={toggleTheme}
          />
        )}
      </header>

      <div className="w-full max-w-md mb-4">
        <input
          type="text"
          placeholder="Create a new todo…"
          className={`w-full p-3 rounded-md border focus:outline-none focus:ring-2 transform -translate-x-2 -translate-y-20 ${
            theme === "light"
              ? "border-gray-300 focus:ring-blue-500 bg-white text-black"
              : "border-gray-600 focus:ring-yellow-500 bg-[#25273c] text-white"
          }`}
        />
      </div>

      <div
        className={`w-full max-w-md rounded-md shadow-md divide-y mb-4 -translate-x-1 -translate-y-20 ${
          theme === "light"
            ? "bg-white divide-gray-200"
            : "bg-[#25273c] divide-gray-700"
        }`}
      >
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center p-4 cursor-pointer"
          >
            <div
              className="flex items-center"
              onClick={() => toggleTodo(todo.id)}
            >
              <div
                className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center transition-all duration-300 ${
                  todo.completed
                    ? "bg-gradient-to-br from-blue-400 to-purple-500 border-none"
                    : theme === "light"
                    ? "border-gray-300 hover:border-blue-400"
                    : "border-gray-500 hover:border-blue-300"
                }`}
              >
                {todo.completed && (
                  <span className="text-white text-xs font-bold transition-opacity duration-200 opacity-100">
                    ✓
                  </span>
                )}
              </div>
              <span
                className={`transition-all duration-300 ${
                  todo.completed
                    ? theme === "light"
                      ? "text-gray-400 line-through"
                      : "text-gray-500 line-through"
                    : theme === "light"
                    ? "text-gray-900"
                    : "text-gray-300"
                }`}
              >
                {todo.text}
              </span>
            </div>

            <button
              className={`${
                theme === "light"
                  ? "text-gray-400 hover:text-gray-600"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              ×
            </button>
          </div>
        ))}

        <div
          className={`flex flex-row items-center justify-between p-3 text-sm ${
            theme === "light" ? "text-gray-600" : "text-gray-400"
          }`}
        >
          <span>{todos.filter((t) => !t.completed).length} items left</span>
          <button className="hover:text-blue-400">Clear Completed</button>
        </div>
      </div>

      <div
        className={`w-full max-w-md flex justify-center items-center text-sm mb-2 rounded-md cursor-pointer ${
          theme === "light"
            ? "bg-white text-gray-500"
            : "bg-[#25273c] text-gray-400"
        }`}
      >
        <div className="flex flex-row gap-4 items-center py-3">
          <button className="hover:text-blue-400">All</button>
          <button className="hover:text-blue-400">Active</button>
          <button className="hover:text-blue-400">Completed</button>
        </div>
      </div>

      <span
        className={`text-sm mb-4 ${
          theme === "light" ? "text-gray-400" : "text-gray-500"
        }`}
      >
        Drag and drop to reorder list
      </span>
    </div>
  );
}
