import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SalesComponent {

}
