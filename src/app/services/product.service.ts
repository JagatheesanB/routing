import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  saveProducts(products: Product[]) {
    this.storageService.saveProducts(products);
  }
}
