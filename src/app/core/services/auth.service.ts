import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { User, UserResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router);
  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:9898/api/auth/login'; // URL de tu API de autenticación

  login(username: string, password: string): Observable<UserResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username, password };

    if ( username === "admin" && password === "admin" ) {
      const mockResponse : UserResponse = {
        token: 'fake-jwt-token',
        data: {
          id: 1,
          username: 'Stallorz',
          email: 'user@example.com',
          active: true,
        },
        error: ''
      };
      if (mockResponse.token) {
        localStorage.setItem('authToken', mockResponse.token);
      }
      return of(mockResponse);
    } else {
      // Simulamos una respuesta de error
      return of({ data: {} as User, error: 'Invalid credentials' } as UserResponse);
    }

    //return this.http.post<any>(this.apiUrl, body, { headers });
  }

  logout(): void {
    // Eliminar el token del almacenamiento
    localStorage.removeItem('authToken');

    // Redirigir al usuario al login
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    // Verificar si el token existe
    return !!localStorage.getItem('authToken');
  }
}
