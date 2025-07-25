import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JokesService } from '../services/jokes.service';

@Component({
  selector: 'app-jokes',
  imports: [CommonModule],
  templateUrl: './jokes.html',
  styleUrl: './jokes.scss',
  providers: [JokesService]
})
export class Jokes {
  jokeSetup: string = '';
  jokePunchline: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private jokeService: JokesService) {}

  fetchJoke() {
    this.isLoading = true;
    this.errorMessage = '';

    this.jokeService.getRandomJoke().subscribe({
      next: (joke) => {
        this.jokeSetup = joke.setup;
        this.jokePunchline = joke.punchline;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Failed to fetch a joke. Please try again!';
        this.jokeSetup = '';
        this.jokePunchline = '';
        this.isLoading = false;
      },
    });
  }
}
