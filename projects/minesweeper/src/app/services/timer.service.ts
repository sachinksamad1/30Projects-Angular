import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private timerInterval: any;
  private _time = 0;

  get time(): number {
    return this._time;
  }

  start() {
    this.reset();
    this.timerInterval = setInterval(() => {
      this._time++;
    }, 1000);
  }

  stop() {
    clearInterval(this.timerInterval);
  }

  reset() {
    this.stop();
    this._time = 0;
  }
}
