import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Menu, MenuItem } from '../../../core/models/menu.model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemComponent {

  menu = input<Menu>();
  menuActive = output<MenuItem>();
  isPadding = input<Boolean>(false);

  updateHeader ( menu: MenuItem ) {
    this.menuActive.emit(menu);
  }

}
