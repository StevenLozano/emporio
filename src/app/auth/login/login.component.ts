import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  host: {
    'class': 'login'
  }
})
export class LoginComponent {

}
