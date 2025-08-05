import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckersComponent } from "./components/checkers/checkers.component";

@Component({
  selector: 'app-root',
  imports: [CheckersComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('checkers');
}
