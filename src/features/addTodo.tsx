import { type TodoItem } from "../types";

export function addToDo(todos: TodoItem[], text: string): TodoItem[] {
  const newTodo: TodoItem = {
    id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
    task: text,
    completed: false,
  };

  return [...todos, newTodo];
}
