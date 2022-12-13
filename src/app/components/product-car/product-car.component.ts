import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';
import { ProductCartService } from '../../services/product-cart.service';
import { ProductsModel } from '../../models/products.model';

@Component({
  selector: 'app-product-car',
  templateUrl: './product-car.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCarComponent {
  constructor(private _productService: ProductService, private _productCartService: ProductCartService, private _activatedRoute: ActivatedRoute) {
  }

  userId$: Observable<number> = this._activatedRoute.params.pipe(map((data) => +data['userId']))

  readonly productArray = new FormArray<FormGroup>([], Validators.required);

  readonly products$: Observable<ProductsModel[]> = this._productService.getAll().pipe(
    tap(data => this.setControls(data))
  )

  readonly cartForm = new FormGroup({
    userId: new FormControl(this.userId$),
    products: this.productArray,
    date: new FormControl()
  })

  private setControls(products: ProductsModel[]): void {
    products.forEach((product) => {
      const newGroup = new FormGroup({
        productId: new FormControl(product.id),
        quantity: new FormControl(1),
        value: new FormControl(false)
      });
      this.productArray.push(newGroup);
    });
  }


  onProductIdFormSubmitted(productForm: FormGroup, userId: number): void {
    this._productCartService.create({
      userId: userId,
      products: this.productArray.value.reduce((acc: { productId: string, quantity: number }[], curr: { productId: string, quantity: number, value: boolean }) => {
        if (curr.value) {
          return [...acc, { productId: curr.productId, quantity: curr.quantity }]
        } else {
          return acc
        }
      },[]),
      date: `${productForm.get('date')?.value.getFullYear()}-${productForm.get('date')?.value.getMonth()}-${productForm.get('date')?.value.getDate()}`
    }).subscribe();
  }
}
