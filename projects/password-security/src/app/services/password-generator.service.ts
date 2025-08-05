import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordGeneratorService {
  generatePassword(
    length: number,
    includeUppercase: boolean,
    includeNumbers: boolean,
    includeSpecialChars: boolean
  ): { password: string } {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    let availableChars = lowercase;
    if (includeUppercase) availableChars += uppercase;
    if (includeNumbers) availableChars += numbers;
    if (includeSpecialChars) availableChars += specialChars;

    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      password += availableChars[randomIndex];
    }

    return { password };
  }
}
