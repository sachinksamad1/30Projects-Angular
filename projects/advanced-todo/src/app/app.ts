import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from "./components/todos/todos.component";

@Component({
  selector: 'app-root',
  imports: [TodosComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('advanced-todo');
}
