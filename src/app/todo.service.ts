import { Injectable } from '@angular/core';
import { todos } from 'src/assets/todos';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
    getTodos = (): Todo[] => {
      return todos;
    }

    generateGuid = (): string => {
      const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

      return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
  }

  constructor() { }
}
