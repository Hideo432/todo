import { addToDo } from "../features/addTodo";
import { type TodoItem } from "../types";

test("adds new todo item", () => {
  const initialTodos: TodoItem[] = [
    { id: 1, task: "text 1", completed: false },
  ];

  const result = addToDo(initialTodos, "text 2");

  expect(result.length).toBe(2);
  expect(result[1]).toEqual({
    id: 2,
    task: "text 2",
    completed: false,
  });
});
