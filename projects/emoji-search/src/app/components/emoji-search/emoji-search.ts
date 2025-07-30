import { CommonModule} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmojiService } from '../../services/emoji.service';
import { Emoji } from '../../models/emoji.model';

@Component({
  selector: 'app-emoji-search',
  imports: [CommonModule, FormsModule],
  templateUrl: './emoji-search.html',
  styleUrl: './emoji-search.scss'
})
export class EmojiSearch implements OnInit {
 searchTerm: string = '';
  selectedCategory: string = '';
  emojis: Emoji[] = [];
  filteredEmojis: Emoji[] = [];
  categories: string[] = [];
  clipboardNotification: string | null = null;

  constructor(private emojiService: EmojiService) {}

  ngOnInit(): void {
    this.emojiService.getEmojis().subscribe((emojis: Emoji[]) => {
      this.emojis = emojis;
      this.filteredEmojis = [...this.emojis];
      this.categories = this.emojiService.getCategories(emojis);
    });
  }

  filterEmojis(): void {
    this.filteredEmojis = [];

    for (let emoji of this.emojis) {
      const isSearchMatch = emoji.name
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());

      let isCategoryMatch = true;
      if (this.selectedCategory) {
        if (emoji.category !== this.selectedCategory) {
          isCategoryMatch = false;
        }
      }

      if (isSearchMatch && isCategoryMatch) {
        this.filteredEmojis.push(emoji);
      }
    }
  }

  onCategoryChange(): void {
    this.filterEmojis();
  }

  copyToClipboard(symbol: string): void {
    navigator.clipboard.writeText(symbol);
    this.clipboardNotification = `Copied "${symbol}" to clipboard`;
    setTimeout(() => {
      this.clipboardNotification = null;
    }, 3000);
  }
}
