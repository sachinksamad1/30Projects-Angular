import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-picker',
  imports: [],
  templateUrl: './theme-picker.html',
  styleUrl: './theme-picker.scss'
})
export class ThemePicker {
   setTheme(theme: 'light' | 'dark') {
    if (theme === 'dark') {
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }
}
