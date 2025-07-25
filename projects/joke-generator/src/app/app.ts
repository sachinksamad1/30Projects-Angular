import { Component, signal } from '@angular/core';
import { Jokes } from "./jokes/jokes";

@Component({
  selector: 'app-root',
  imports: [Jokes],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('joke-generator');
}
