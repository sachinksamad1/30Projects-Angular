import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CryptoOptionsComponent } from './components/crypto-options/crypto-options.component';
import { CryptoPriceChartComponent } from './components/crypto-price-chart/crypto-price-chart.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, CryptoOptionsComponent, CryptoPriceChartComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('crypto-charts');
}
