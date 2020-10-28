import { Component, OnInit } from '@angular/core';
import { todos } from 'src/assets/todos';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  title: string = 'supertitle for todos!'
  todos: Todo[] = todos;

  constructor() { }

  ngOnInit(): void {
  }
}
