import type { TodoItem } from "../types";

export const toggleTaskCompleted = (
  id: string,
  setTaskList: React.Dispatch<React.SetStateAction<TodoItem[] | null>>
) => {
  setTaskList(
    (prev) =>
      prev?.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ) || null
  );
};
