import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private translate = inject(TranslateService);
  title = 'emporio';

  constructor() {
    this.translate.setDefaultLang('es');
    this.translate.use('es'); // Puedes cambiarlo por el idioma que prefieras
  }
}
