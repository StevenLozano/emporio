import { NgOptimizedImage } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    TranslateModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  host: {
    'class': 'login'
  }
})

export class LoginComponent {

  private authService = inject(AuthService);
  private router = inject(Router);

  error = input<string>();
  errors$ = this.error();
  submitEM = output<string>();

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }

  onSubmit(): void {
    this.authService.login(this.form.get("username")?.value, this.form.get("password")?.value).subscribe({
      next: (response) => {
        if (response.error && response.error != "" )
          this.errors$ = response["error"];
        else {
          console.log('Login successful', response);
          this.router.navigate(['/dashboard']);
        }
        // Redirigir al usuario o manejar el éxito del login
      },
      error: (err) => {
        console.error('Login failed', err);
        this.errors$ = 'Login failed. Please try again.';
      }
    });
  }
}
