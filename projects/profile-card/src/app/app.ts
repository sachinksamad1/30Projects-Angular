import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('profile-card');

  name: string = 'John Doe';
  age: number = 25;
  description: string = 'A passionate software developer with a love for creating innovative solutions.';
}
