import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  users: User[] = [{ id: 1, email: 'jagadeesh@user.com', password: '12345' }];

  loadUsers() {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }

  getAllUsers(): User[] {
    return JSON.parse(localStorage.getItem('users')!);
  }

  setLoggedUser(user: User): void {
    localStorage.setItem('loggedUser', JSON.stringify(this.users));
  }

  getloggedInUser(): User {
    return JSON.parse(localStorage.getItem('loggedUser') as string);
  }

  removeLoggedUser(): void {
    localStorage.removeItem('loggedUser');
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('loggedUser') !== null;
  }

  saveProducts(products: Product[]): void {
    localStorage.setItem('products', JSON.stringify(products));
  }

  getCatchedProducts(): Product[] {
    return JSON.parse(localStorage.getItem('products')!);
  }

  setCart(cart:Product[]):void {
      localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCart() {
    return JSON.parse(localStorage.getItem('cart') as string);
  }
}
