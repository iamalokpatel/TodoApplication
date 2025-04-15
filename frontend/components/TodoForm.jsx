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
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className=" TodoForm">
      <h2 className="text-xl font-semibold">New Addition</h2>
      <hr></hr>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        className="border outline-none  Title"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
        className=" border  outline-none Description"
      />

      <button type="submit" className=" Button">
        Add Todo
      </button>
    </form>
  );
}
