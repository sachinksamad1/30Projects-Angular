import { Component, signal } from '@angular/core';
import { Game } from "./game/game";

@Component({
  selector: 'app-root',
  imports: [Game],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('rock-paper-scissors');
}
