import type { TodoItem } from "../types";
import { toggleTaskCompleted } from "../features/toggleAddToDo";

describe("toggleTaskCompleted", () => {
  test("toggle index", () => {
    let todoList: TodoItem[] | null = [
      { id: 1, task: "Task 1", completed: false },
      { id: 2, task: "Task 2", completed: true },
    ];

    const setTaskList = jest.fn((updater) => {
      todoList = typeof updater === "function" ? updater(todoList) : updater;
    });

    toggleTaskCompleted(0, setTaskList);

    expect(setTaskList).toHaveBeenCalled();

    expect(todoList && todoList[0].completed).toBe(true);

    expect(todoList && todoList[1].completed).toBe(true);

    toggleTaskCompleted(1, setTaskList);

    expect(todoList && todoList[1].completed).toBe(false);
  });
});
