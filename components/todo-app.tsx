import { getAllTodos } from "@/lib/dbHandlers";
import { PlusIcon } from "lucide-react";
import { TodoList } from "./todo-list";

export async function TodoApp() {
	const todos = await getAllTodos();
	return (
		<div className="mx-auto mt-8 max-w-md rounded-lg bg-white p-4 shadow-md">
			<h1 className="mb-4 font-bold text-2xl text-gray-800">Todo App</h1>
			<div className="mb-4 flex">
				<input
					type="text"
					// value={newTodo}
					// onChange={(e) => setNewTodo(e.target.value)}
					placeholder="Add a new todo"
					className="mr-2 flex-grow rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<button
					type="button"
					// onClick={addTodo}
					className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
				>
					<PlusIcon className="h-5 w-5" />
					<span className="sr-only">Add Todo</span>
				</button>
			</div>
			<TodoList todos={todos} />
		</div>
	);
}
