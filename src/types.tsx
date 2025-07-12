export interface TodoItem {
  task: string;
  completed: boolean;
  id: string;
}
export interface TodoList {
  general: string[];
  completed: string[];
  inCompleted: string[];
}
