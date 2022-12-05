import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductCartModel } from '../models/product-cart.model';

@Injectable()
export class ProductCartService {
  constructor(private _httpClient: HttpClient) {
  }

  create(cart: ProductCartModel): Observable<ProductCartModel> {
    return this._httpClient.post<ProductCartModel>('https://fakestoreapi.com/carts', cart);
  }
}
