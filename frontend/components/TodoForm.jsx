"use client";
import { useState } from "react";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        date: new Date().toISOString(),
      }),
    });

    setTitle("");
    setDescription("");
    window.location.reload(); // refresh to see new todo
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4  bg-white p-6 rounded-xl shadow-md pl-8 p-4 w-1/3 TodoForm"
    >
      <h2 className="text-xl font-semibold">New Addition</h2>
      <hr></hr>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 Title"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 Description"
      />

      <button
        type="submit"
        className=" Button bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all"
      >
        Add Todo
      </button>
    </form>
  );
}
