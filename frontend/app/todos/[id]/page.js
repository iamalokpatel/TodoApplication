"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function TodoDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [todo, setTodo] = useState({ title: "", description: "" });

  useEffect(() => {
    fetch(`http://localhost:5000/todos/${id}`)
      .then((res) => res.json())
      .then(setTodo);
  }, [id]);

  const handleUpdate = async () => {
    await fetch(`http://localhost:5000/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
    router.push("/todos");
  };

  const handleDelete = async () => {
    await fetch(`http://localhost:5000/todos/${id}`, { method: "DELETE" });
    router.push("/todos");
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow space-y-4 EditForm">
      <h1 className="text-2xl font-bold">Edit Todo</h1>
      <input
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 Title"
      />
      <textarea
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 Description"
      />
      <div className="flex gap-4">
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 DeleteButton"
        >
          Delete
        </button>
        <button
          onClick={handleUpdate}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 UpdateButton"
        >
          Update
        </button>
      </div>
    </div>
  );
}
