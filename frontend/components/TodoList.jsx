"use client";
import Link from "next/link";

export default function TodoList({ todos }) {
  if (!todos || todos.length === 0) {
    return <p className="text-center text-gray-500">No todos found.</p>;
  }

  return (
    <div className="Todolists">
      <div className="grid TodoListContent">
        {todos.map((todo) => (
          <Link
            key={todo._id}
            href={`/todos/${todo._id}`}
            className="no-underline TodoListst"
          >
            <h2 className=" Title">{todo.title}</h2>
            <div>
              <h3 className="Description">{todo.description}</h3>
              <p className="Date">{todo.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
