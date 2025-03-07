import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, Observable, of, combineLatest} from 'rxjs';
import {ProductsModel} from '../../models/products.model';
import {ProductService} from '../../services/product.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-sorted-product-list',
  templateUrl: './sorted-product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortedProductListComponent {
  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>("asc");
  public order$: Observable<string> = this._orderSubject.asObservable();
  readonly products$: Observable<ProductsModel[]> = combineLatest([
    this._productService.getAll(),
    this.order$
  ]).pipe(
    map(([products, order]: [ProductsModel[], string]) => {
      return products.sort((a, b) => {
        if(a.price > b.price) return order === 'asc' ? 1 : -1;
        if(a.price < b.price) return order === "asc" ? -1 : 1;
        return 0;
      })
    })
  )
  public orders: Observable<string[]> = of(['asc', 'desc']);

  constructor(private _productService: ProductService) {
  }

  sort(order: string): void {
    this._orderSubject.next(order);
  }
}
