import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router);
  private http = inject(HttpClient);

  private apiUrl = 'https://api.example.com/login'; // URL de tu API de autenticación

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username, password };

    if ( username === "admin" && password === "admin" ) {
      const mockResponse = {
        token: 'fake-jwt-token',
        user: {
          id: 1,
          username: 'user',
          email: 'user@example.com'
        }
      };
      if (mockResponse.token) {
        localStorage.setItem('authToken', mockResponse.token);
      }
      return of(mockResponse);
    } else {
      // Simulamos una respuesta de error
      return of({ error: 'Invalid credentials' });
    }

    /*return this.http.post<any>(this.apiUrl, body, { headers })
      .pipe(
        map(response => {
          // Guardar el token en el localStorage o sessionStorage
          if (response.token) {
            localStorage.setItem('authToken', response.token);
          }
          return response;
        })
      );*/
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
