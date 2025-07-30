import { Component, signal } from '@angular/core';
import { EmojiSearch } from "./components/emoji-search/emoji-search";
import { ThemePicker } from "./components/theme-picker/theme-picker";

@Component({
  selector: 'app-root',
  imports: [EmojiSearch, ThemePicker],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('emoji-search');
}
