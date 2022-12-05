import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsModel } from '../../models/products.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-car',
  templateUrl: './product-car.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCarComponent {
  readonly products$: Observable<ProductsModel[]> = this._productService.getAll();

  constructor(private _productService: ProductService) {
  }
}
