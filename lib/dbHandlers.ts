import { supabase } from "@/lib/supabase";

export const getAllTodos = async () => {
	const todos = await supabase.from("todo").select("*");
	return todos.data;
};

export const addTodo = async (title: string) => {
	const newTodo = await supabase.from("todo").insert({ title });
	return newTodo.error;
};
