import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductsModel } from '../../models/products.model';
import { ProductService } from '../../services/product.service';
import { ProductCartService } from '../../services/product-cart.service';


@Component({
  selector: 'app-product-car',
  templateUrl: './product-car.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCarComponent {
  public array: [{ readonly productId: number, readonly quantity: number }] = [{
    productId: -1,
    quantity: 0
  }]
  public count = 0
  userId$: Observable<number> = this._activatedRoute.params.pipe(map((data) => +data['userId']))
  readonly products$: Observable<ProductsModel[]> = this._productService.getAll();
  readonly productForm: FormGroup = new FormGroup({
    productId: new FormControl(),
    date: new FormControl(),
  });

  constructor(private _productService: ProductService, private _productCartService: ProductCartService, private _activatedRoute: ActivatedRoute) {
  }

  onChange(event: any) {
    if (event.checked) {
      this.array.push({ productId: parseInt(event.source.value), quantity: 1 })
    } else {
      const i = this.array.findIndex(x => x === { productId: parseInt(event.source.value), quantity: 1 });
      this.array.splice(i, 1)
    }
  }


  onProductIdFormSubmitted(productForm: FormGroup, userId: number): void {
    if (this.count === 0) {
      this.array.splice(0, 1)
    }
    this.count = 1
    this._productCartService.create({
      userId: userId,
      products: this.array,
      date: `${productForm.get('date')?.value.getFullYear()}-${productForm.get('date')?.value.getMonth()}-${productForm.get('date')?.value.getDate()}`
    }).subscribe();
  }
}
