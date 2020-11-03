export interface Todo {
  id: string;
  text: string;
}

export interface TodoWithEditState {
  id: string;
  text: string;
  isEditable: boolean;
}
