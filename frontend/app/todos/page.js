import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

export const dynamic = "force-dynamic";

export default async function TodosPage() {
  const res = await fetch("http://localhost:5000/todos?page=1&limit=10", {
    cache: "no-store",
  });
  const { todos } = await res.json();
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-8 TodoDePage">
        <div className="TodoList">
          <TodoList todos={todos} />
        </div>
        <div className="TodoForm">
          <TodoForm />
        </div>
      </div>
    </div>
  );
}
