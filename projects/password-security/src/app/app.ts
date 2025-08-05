import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { PasswordGeneratorComponent } from "./components/password-generator/password-generator.component";
import { PasswordExplanationComponent } from "./components/password-explanation/password-explanation.component";
import { PwnedPasswordCheckerComponent } from "./components/pwned-password-checker/pwned-password-checker.component";

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent, 
    PasswordGeneratorComponent, 
    PasswordExplanationComponent, 
    PwnedPasswordCheckerComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('password-security');
}
