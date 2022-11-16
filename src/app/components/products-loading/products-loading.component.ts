import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {delay, Observable} from 'rxjs';
import { ProductsModel } from '../../models/products.model';
import { ProductService } from '../../services/product.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-products-loading',
  templateUrl: './products-loading.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsLoadingComponent {
  readonly list$: Observable<ProductsModel[]> = this._productService.getAll().pipe(
    delay(2000),
    map(() => [])
  );

  constructor(private _productService: ProductService) {
  }
}
