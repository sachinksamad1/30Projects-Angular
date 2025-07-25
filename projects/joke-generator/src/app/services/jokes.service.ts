import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  private apiUrl = 'https://official-joke-api.appspot.com/random_joke';

  constructor(private http: HttpClient) {}

    getRandomJoke(): Observable<{ setup: string; punchline: string }> {
    return this.http.get<{ setup: string; punchline: string }>(this.apiUrl);
  }
}
