"use client";
import Link from "next/link";

export default function TodoList({ todos }) {
  if (!todos || todos.length === 0) {
    return <p className="text-center text-gray-500">No todos found.</p>;
  }

  return (
    <div className="Todolists">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-1/3 pl-4 p-4 TodoListContent">
        {todos.map((todo) => (
          <Link
            key={todo._id}
            href={`/todos/${todo._id}`}
            className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition-all border border-gray-200 no-underline TodoListst"
          >
            <h1 className="text-lg font-bold text-blue-600">{todo.title}</h1>
            <div>
              <h3 className="text-gray-700 mt-2">{todo.description}</h3>
              <p className="text-gray-700 mt-2">{todo.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
