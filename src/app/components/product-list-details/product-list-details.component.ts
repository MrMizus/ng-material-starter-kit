import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
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
  private _selectedProductSubject: Subject<number> = new Subject<number>();
  public selectedProduct$: Observable<number> = this._selectedProductSubject.asObservable();
  readonly details$: Observable<ProductsModel> = this.selectedProduct$.pipe(
    switchMap(data => this._productService.getOne(data))
  );

  constructor(private _productService: ProductService) {
  }

  selectProduct(id: number): void {
    this._selectedProductSubject.next(id)
  }
}
