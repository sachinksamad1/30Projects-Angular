import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [];
  constructor(private httpClient: HttpClient) {}

  getUsers(): User[] {
    return this.users;
  }

  fetchUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(API_URL).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('An error occured: ', error);
        throw new Error('Error occured while fetching users');
      })
    );
  }

  findUserById(userId: number): Observable<User | undefined> {
    return this.httpClient.get<User[]>(`${API_URL}?id=${userId}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('An error occured:', error);
        throw new Error('Error occured while finding users');
      }),
      map((users) => (users.length > 0 ? users[0] : undefined))
    );
  }
}
