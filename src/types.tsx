export interface TodoItem {
  task: string;
  completed: boolean;

  id: number;
}
export interface TodoList {
  general: string[];
  completed: string[];
  inCompleted: string[];
}
