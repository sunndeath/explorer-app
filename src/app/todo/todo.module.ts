import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoService } from '../todo.service';

@NgModule({
  // The components, directives, and pipes that belong to this NgModule.
  declarations: [TodoComponent],
  // The subset of declarations that should be visible and usable in the component templates of other NgModules.
  exports: [TodoComponent],
  // Other modules whose exported classes are needed by component templates declared in this NgModule.
  imports: [CommonModule],
  // Creators of services that this NgModule contributes to the global collection of services; they become accessible in all parts of the app. (You can also specify providers at the component level.)
  providers: [TodoService],
  // The main application view, called the root component, which hosts all other app views. Only the root NgModule should set the bootstrap property.
  // bootstrap: []
})
export class TodoModule { }
