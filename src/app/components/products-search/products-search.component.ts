import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, combineLatest, debounceTime} from 'rxjs';
import { ProductsModel } from '../../models/products.model';
import { ProductService } from '../../services/product.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsSearchComponent {
  readonly search: FormGroup = new FormGroup({ title: new FormControl() });
  readonly startsWith$: Observable<string> = this.search.valueChanges.pipe(
    map(form => form.title.toLocaleLowerCase()),
    debounceTime(1000)
  );

  readonly list$: Observable<ProductsModel[]> = combineLatest([
    this._productService.getAll(),
    this.startsWith$,
  ]).pipe(
    map(([products, startWith]) => {
      return products.filter(product => product.title.toLocaleLowerCase().startsWith(startWith))
    })
  )

  constructor(private _productService: ProductService) {
  }

}
