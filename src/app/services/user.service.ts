import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDto } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

  getUser(): Observable<UserDto> {
    return this.http.get<UserDto>(`${this.baseUrl}/me`, { withCredentials: true });
  }

  addUser(user: UserDto): Observable<UserDto> {
    return this.http.post<UserDto>(`${this.baseUrl}`, user, { withCredentials: true });
  }

  updateUser(user: UserDto): Observable<UserDto> {
    return this.http.put<UserDto>(`${this.baseUrl}/me`, user, { withCredentials: true });
  }
}
