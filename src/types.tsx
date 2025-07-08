export interface TodoItem {
  task: string;
  completed: boolean;
  toggleCompleted?: React.Dispatch<React.SetStateAction<TodoItem[] | null>>;
  id: number;
}
export interface TodoList {
  general: string[];
  completed: string[];
  inCompleted: string[];
}
