import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarPageComponent } from './components/calendar-page/calendar-page.component';

@Component({
  selector: 'app-root',
  imports: [CalendarPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('calender');
}
