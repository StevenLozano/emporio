import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FileUploadComponent } from '../../shared/components/file-upload/file-upload.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FileUploadComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {

}
