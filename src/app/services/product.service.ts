import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsModel } from '../models/products.model';

@Injectable()
export class ProductService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ProductsModel[]> {
    return this._httpClient.get<ProductsModel[]>('https://fakestoreapi.com/products');
  }

  delete(id: string): Observable<ProductsModel> {
    return this._httpClient.delete<ProductsModel>(`https://fakestoreapi.com/products/${id}`);
  }

  getOne(id: string): Observable<ProductsModel> {
    return this._httpClient.get<ProductsModel>(`https://fakestoreapi.com/products/${id}`);
  }
}
