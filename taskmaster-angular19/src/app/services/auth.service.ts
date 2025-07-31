import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  private usersKey = 'app_users';

  constructor() {}

  private hasToken(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  // Save user to localStorage
  signup(email: string, password: string): Observable<boolean> {
    const users = this.getUsers();
    const userExists = users.some(user => user.email === email);
    if (userExists) return of(false); // Already signed up

    users.push({ email, password });
    localStorage.setItem(this.usersKey, JSON.stringify(users));
    return of(true);
  }

  // Validate login
  login(email: string, password: string): Observable<boolean> {
    const users = this.getUsers();
    const validUser = users.find(user => user.email === email && user.password === password);

    if (validUser) {
      localStorage.setItem('auth_token', 'dummy_token');
      this.isLoggedInSubject.next(true);
      return of(true);
    }

    return of(false);
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    this.isLoggedInSubject.next(false);
  }

  private getUsers(): User[] {
    const usersJson = localStorage.getItem(this.usersKey);
    return usersJson ? JSON.parse(usersJson) : [];
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth_token');
  }
  
}
