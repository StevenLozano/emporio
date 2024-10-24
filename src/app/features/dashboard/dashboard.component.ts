import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Menu, MenuItem } from '../../core/models/menu.model';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderChildComponent } from './header/header-child/header-child.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeaderComponent,
    HeaderChildComponent,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MenuItemComponent,
    RouterOutlet, 
    TranslateModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  private translate = inject(TranslateService);

  menu: Menu = [
    {
      id: 1,
      title: this.translate.instant('DASHBOARD.HOME'),
      icon: 'home',
      link: '/home',
      color: '#3f51b5',
    },
    {
      id: 2,
      title: this.translate.instant('DASHBOARD.PRODUCT'),
      icon: 'business_center',
      color: '#ff7f0e',
      subMenu: [
        {
          id: 3,
          title: this.translate.instant('DASHBOARD.PRODUCT_ADD'),
          icon: 'add_circle_outline',
          link: '/products',
          color: '#3FBB10',
        },
        {
          id: 4,
          title: this.translate.instant('DASHBOARD.PRODUCT_UPD'),
          icon: 'update',
          color: '#D3B108',
          link: '/sales',
        },
        {
          id: 5,
          title: this.translate.instant('DASHBOARD.PRODUCT_DEL'),
          icon: 'delete',
          color: '#CB1919',
          link: '/productDel',
        }
      ],
    },
  ];
  
  menuActive: MenuItem = this.menu[0];
  opened = true;

  toggle(): void {
    this.opened = !this.opened;
    this.menu.filter(item => item.id === 1);
  }

  filterMenu(menuActive: MenuItem){
    this.menuActive = menuActive;
  }
}
