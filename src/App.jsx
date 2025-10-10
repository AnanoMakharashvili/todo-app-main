import React from "react";
import Light from "./assets/bg-mobile-light.jpg";
import Moon from "./assets/icon-moon.svg";

export default function App() {
  return (
    <div className=" flex flex-col items-center justify-center  min-h-screen bg-gray-50 p-4 relative font-sans">
      <img
        src={Light}
        alt="light background"
        className="absolute top-0 left-0 w-full -z-10"
      />
      <header className="flex flex-row items-center justify-between w-full max-w-md mb-6 bg-blue-600 p-4 z-10">
        <h1 className="text-4xl font-bold text-white">TODO</h1>
        <img src={Moon} alt="moon icon" className="w-6 h-6 cursor-pointer" />
      </header>

      <form className="w-full max-w-md mb-4">
        <input
          type="text"
          placeholder="Create a new todo…"
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </form>

      <div className="w-full max-w-md bg-white rounded-md shadow-md divide-y divide-gray-200 mb-4">
        <div className="flex justify-between items-center p-4">
          <span className="text-gray-900 font-semibold">
            Jog around the park 3x
          </span>
          <button className="text-gray-400 hover:text-gray-600">×</button>
        </div>
        <div className="flex justify-between items-center p-4">
          <span className="text-gray-500"> 10 minutes meditation</span>
          <button className="text-gray-400 hover:text-gray-600">×</button>
        </div>
        <div className="flex justify-between items-center p-4">
          <span className="text-gray-500"> Read for 1 hour</span>
          <button className="text-gray-400 hover:text-gray-600">×</button>
        </div>
        <div className="flex justify-between items-center p-4">
          <span className="text-gray-500"> Pick up groceries</span>
          <button className="text-gray-400 hover:text-gray-600">×</button>
        </div>
        <div className="flex justify-between items-center p-4">
          <span className="text-gray-500">
            {" "}
            Complete Todo App on Frontend Mentor
          </span>
          <button className="text-gray-400 hover:text-gray-600">×</button>
        </div>
      </div>

      <div className="w-full max-w-md flex justify-between items-center text-sm text-gray-500 mb-2">
        <span>5 items left</span>
        <div className="flex gap-4">
          <button className="text-blue-500 font-semibold">All</button>
          <button className="hover:text-blue-400">Active</button>
          <button className="hover:text-blue-400">Completed</button>
        </div>
        <button className="hover:text-gray-700">Clear Completed</button>
      </div>

      <span className="text-gray-400 text-sm mb-4">
        Drag and drop to reorder list
      </span>
    </div>
  );
}
