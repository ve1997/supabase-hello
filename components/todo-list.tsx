import { TrashIcon } from "lucide-react";
import type { Todo } from "./todo-app";

export function TodoList({
	todos,
	toggleTodo,
	removeTodo,
}: {
	todos: Todo[];
	toggleTodo: (id: number) => void;
	removeTodo: (id: number) => void;
}) {
	return (
		<ul className="space-y-2">
			{todos.map((todo) => (
				<li
					key={todo.id}
					className="flex items-center justify-between rounded-md bg-gray-100 p-3"
				>
					<div className="flex items-center">
						<input
							type="checkbox"
							id={`todo-${todo.id}`}
							checked={todo.completed}
							onChange={() => toggleTodo(todo.id)}
							className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
						/>
						<label
							htmlFor={`todo-${todo.id}`}
							className={`${
								todo.completed ? "text-gray-500 line-through" : "text-gray-800"
							}`}
						>
							{todo.text}
						</label>
					</div>
					<button
						type="button"
						onClick={() => removeTodo(todo.id)}
						className="text-red-500 hover:text-red-700 focus:outline-none"
					>
						<TrashIcon className="h-5 w-5" />
						<span className="sr-only">Delete Todo</span>
					</button>
				</li>
			))}
		</ul>
	);
}
