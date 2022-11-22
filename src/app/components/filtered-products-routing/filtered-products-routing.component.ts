import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { ProductsModel } from '../../models/products.model';
import { CategoriesService } from '../../services/categories.service';
import { ProductService } from '../../services/product.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-filtered-products-routing',
  templateUrl: './filtered-products-routing.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredProductsRoutingComponent {
  readonly categories$: Observable<string[]> = this._categoriesService.getAll();
  readonly products$: Observable<ProductsModel[]> = combineLatest([
    this._productService.getAll(),
    this._activatedRoute.params
  ]).pipe(map(([products, params]: [ProductsModel[], Params]) => {
    return products.filter((product: ProductsModel) => product.category === params['category'])
  }))

  constructor(private _categoriesService: CategoriesService, private _productService: ProductService, private _activatedRoute: ActivatedRoute) {
  }
}
