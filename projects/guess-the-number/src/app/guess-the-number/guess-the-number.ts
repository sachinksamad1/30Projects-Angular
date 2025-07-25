import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guess-the-number',
  imports: [CommonModule, FormsModule],
  templateUrl: './guess-the-number.html',
  styleUrl: './guess-the-number.scss'
})
export class GuessTheNumber {
secretNumber = this.generateRandomNumber();
  attemptsLeft = 10;
  guessedNumber?: number;
  feedbackMessage = '';
  gameOver = false;

  private static readonly MAX_NUMBER = 100;
  private static readonly MAX_ATTEMPTS = 10;

  private generateRandomNumber(): number {
    return Math.floor(Math.random() * GuessTheNumber.MAX_NUMBER) + 1;
  }

  public isValidGuess(guess?: number): boolean {
    return (
      guess !== undefined &&
      guess >= 1 &&
      guess <= GuessTheNumber.MAX_NUMBER
    );
  }

  submitGuess(): void {
    if (!this.isValidGuess(this.guessedNumber)) {
      this.feedbackMessage = `Enter a number between 1 and ${GuessTheNumber.MAX_NUMBER}.`;
      return;
    }
    this.attemptsLeft--;
    this.evaluateGuess();
  }

  private evaluateGuess(): void {
    if (this.guessedNumber === this.secretNumber) {
      this.endGame(true);
    } else if (this.attemptsLeft === 0) {
      this.endGame(false);
    } else {
      this.feedbackMessage =
        this.guessedNumber! > this.secretNumber
          ? 'Too High! Try again.'
          : 'Too low! Try again.';
    }
  }

  private endGame(isWin: boolean): void {
    this.gameOver = true;
    this.feedbackMessage = isWin
      ? 'Congratulations! You guessed the correct number!'
      : `Game over! The correct number was ${this.secretNumber}`;
  }

  resetGame(): void {
    this.secretNumber = this.generateRandomNumber();
    this.attemptsLeft = GuessTheNumber.MAX_ATTEMPTS;
    this.guessedNumber = undefined;
    this.feedbackMessage = '';
    this.gameOver = false;
  }
}
