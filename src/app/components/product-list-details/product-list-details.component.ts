import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsModel } from '../../models/products.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list-details',
  templateUrl: './product-list-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListDetailsComponent {
  readonly list$: Observable<ProductsModel[]> = this._productService.getAll();

  constructor(private _productService: ProductService) {
  }
}
