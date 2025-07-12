import { type TodoItem } from "../types";

export function addToDo(todos: TodoItem[], text: string): TodoItem[] {
  const newTodo: TodoItem = {
    id: crypto.randomUUID(),
    task: text.trim(),
    completed: false,
  };

  return [...todos, newTodo];
}
