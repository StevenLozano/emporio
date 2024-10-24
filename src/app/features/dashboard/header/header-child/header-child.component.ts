import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MenuItem } from '../../../../core/models/menu.model';

@Component({
  selector: 'app-header-child',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './header-child.component.html',
  styleUrl: './header-child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderChildComponent {
  header = input<MenuItem>();
}
