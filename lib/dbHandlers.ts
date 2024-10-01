import { supabase } from "@/lib/supabase";

export const getAllTodos = async () => {
	const todos = await supabase.from("todo").select("*");
	return todos.data;
};
