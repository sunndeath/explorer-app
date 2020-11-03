import { Component, OnInit } from '@angular/core';
import { Todo, TodoWithEditState } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  title = 'supertitle for todos!';
  todos: TodoWithEditState[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    const todos: Todo[] = this.todoService.getTodos();
    const todosWithEditState: TodoWithEditState[] = todos.map((todo: Todo) => ({ ...todo, isEditable: false }))

    this.todos = todosWithEditState;
  }

  setTodoUIState(todoId: string): void {
    const todos: TodoWithEditState[] = this.todos;

    const nextTodos: TodoWithEditState[] = todos.map((todo: TodoWithEditState) => {
      const isEditable = todo.isEditable ? false : true;

      if (todo.id === todoId) {
        return {
          ...todo,
          isEditable
        };
      }

      return todo;
    });

    this.todos = nextTodos;
  }

  setTodoText(todoId: string, text: string): void {
    const todos: TodoWithEditState[] = this.todos;

    const nextTodos: TodoWithEditState[] = todos.map((todo: TodoWithEditState) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isEditable: false,
          text
        };
      }

      return todo;
    });

    this.todos = nextTodos;
  }

  deleteTodo(todoId: string): void {
    const todos: TodoWithEditState[] = this.todos;
    const nextTodos: TodoWithEditState[] = todos.filter((todo: TodoWithEditState) => todo.id !== todoId);

    this.todos = nextTodos;
  }

  addTodo(): void {
    const todos: TodoWithEditState[] = this.todos;
    const guid = this.todoService.generateGuid();
    const newTodo: TodoWithEditState = { id: guid, text: '', isEditable: true };
    const nextTodos = todos.concat(newTodo);

    this.todos = nextTodos;
  }
}
