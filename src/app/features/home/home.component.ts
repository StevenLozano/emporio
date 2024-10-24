import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HeaderChildComponent } from '../dashboard/header/header-child/header-child.component';
import { TranslateModule } from '@ngx-translate/core';
import { MenuItem } from '../../core/models/menu.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIconModule,
    TranslateModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
}
