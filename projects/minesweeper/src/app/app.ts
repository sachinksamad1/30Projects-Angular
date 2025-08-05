import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MinesweeperComponent } from "./components/minesweeper/minesweeper.component";

@Component({
  selector: 'app-root',
  imports: [MinesweeperComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('minesweeper');
}
