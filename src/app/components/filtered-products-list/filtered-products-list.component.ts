import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable, combineLatest, map} from 'rxjs';
import {ProductsModel} from '../../models/products.model';
import {CategoriesService} from '../../services/categories.service';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-filtered-products-list',
  templateUrl: './filtered-products-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredProductsListComponent {
  readonly categories$: Observable<string[]> = this._categoriesService.getAll();
  readonly products$: Observable<ProductsModel[]> = combineLatest([
    this._productService.getAll(),
    this._activatedRoute.params
  ]).pipe(map(([products, params]: [ProductsModel[], Params]) => {
    return products.filter((product: ProductsModel) => product.category === params['category']);
  }))

  constructor(private _categoriesService: CategoriesService, private _productService: ProductService, private _activatedRoute: ActivatedRoute) {
  }
}
