import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Weather } from "./weather/weather";

@Component({
  selector: 'app-root',
  imports: [Weather],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('weather');
}
