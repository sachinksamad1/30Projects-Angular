import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';
import { Display } from '../display/display';

@Component({
  selector: 'app-calculator',
  imports: [CommonModule, Display],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss'
})
export class Calculator {
  [x: string]: any;
    operators: string[] = ['+', '-', '*', '/'];
  buttonLayout: string[][] = [
    ['1', '2', '3', '+'],
    ['4', '5', '6', '-'],
    ['7', '8', '9', '*'],
    ['C', '0', '=', '/'],
  ];

  constructor(private calculatorSerice: CalculatorService) {}

  handleInput(input: string): void {
    this.calculatorSerice.handleInput(input);
  }

  get display(): string {
    return this.calculatorSerice['getDisplay']();
  }
}
