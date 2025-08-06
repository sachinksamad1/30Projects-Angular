import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersComponent } from "./components/users/users.component";
import { UserformComponent } from "./components/userform/userform.component";

@Component({
  selector: 'app-root',
  imports: [UsersComponent, UserformComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('user-management-app');
}
