import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgOptimizedImage, TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  host: {
    'class': 'login'
  }
})
export class LoginComponent {
}
