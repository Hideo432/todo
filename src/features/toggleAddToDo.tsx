import type { TodoItem } from "../types";

export const toggleTaskCompleted = (
  index: number,
  setTaskList: React.Dispatch<React.SetStateAction<TodoItem[] | null>>
) => {
  setTaskList(
    (prev) =>
      prev?.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      ) || null
  );
};
