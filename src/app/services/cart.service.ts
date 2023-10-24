import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Product } from '../Models/product';
import { AuthService } from './auth.service';
import { Cart } from '../Models/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];

  constructor(
    private storageService: StorageService,
    private authService: AuthService
  ) {}

  getCart(): Product[] {
    return this.storageService.getCart();
  }

  getCount(): number {
    let count: number = 0;

    for (let product of this.cart) {
      if (product.count) {
        count += product.count;
      }
    }
    return count;
  }

  addToCart(id: number) {
    let products: Product[] = this.storageService.getCatchedProducts();

    let cart = this.storageService.getCart();

    let product = products.find((p) => p.id === id);

    if (product) {
      let existingCartItem = cart.find(
        (item: { id: number }) => item.id === id
      );

      if (!existingCartItem) {
        cart.push({ ...product, id: id, count: 1 });
      } else {
        cart = cart.map((item: { id: number; count: any }) => {
          if (item.id === id) {
            return { ...item, count: (item.count || 0) + 1 };
          } else {
            return item;
          }
        });
      }

      this.storageService.setCart(cart);
    }
  }
}
